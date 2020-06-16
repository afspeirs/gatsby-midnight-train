const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges
    .filter((post) => !post.node.fields.slug.includes('/pages/'));
  const eventsPosts = posts.filter((post) => post.node.fields.slug.includes('/events/'));

  const createPostPage = (array, type) => {
    array.forEach((post, index) => {
      const previous = index === array.length - 1 ? null : array[index + 1].node;
      const next = index === 0 ? null : array[index - 1].node;

      createPage({
        component: path.resolve(`./src/templates/${type}-post.js`),
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
        path: post.node.fields.slug,
      });
    });
  };

  createPostPage(eventsPosts, 'events');
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const folder = getNode(node.parent).sourceInstanceName;
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value: `/${folder}${value}`,
    });
  }
};
