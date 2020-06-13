import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import BlogCard from '../components/blog-cards';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPage = ({ data, location }) => {
  const posts = data.blog.edges;
  const content = data.content.edges[0].node;
  const { title } = content.frontmatter;

  return (
    <Layout location={location}>
      <SEO title={title} />

      <h2>{title}</h2>

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: content.html }} />

      <BlogCard posts={posts} />
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    blog: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^(\/blog\/)/"} } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    content: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/pages/blog/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
