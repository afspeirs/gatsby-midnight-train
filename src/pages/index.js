import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import BlogCards from '../components/blog-cards';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data, location }) => {
  const posts = data.blog.edges;
  const content = data.content.edges[0].node;

  return (
    <Layout location={location}>
      <SEO />

      <h2>{content.frontmatter.title}</h2>

      {/* eslint-disable-next-line react/no-danger */}
      <section dangerouslySetInnerHTML={{ __html: content.html }} />

      <section>
        <h3>Most recent blog posts:</h3>

        <BlogCards posts={posts} />
        <Link to="/blog/">View all Blog Posts</Link>
      </section>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    blog: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^(\/blog\/)/"} } }
      limit: 2
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
      filter: { fields: { slug: { eq: "/pages/" } } }
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
