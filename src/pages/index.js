import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import BlogCards from '../components/blog-cards';
import EventsCards from '../components/events-cards';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data, location }) => {
  const content = data.content.edges[0].node;
  const { blogs, events } = data;

  return (
    <Layout location={location}>
      <SEO />

      <h2>{content.frontmatter.title}</h2>

      {/* eslint-disable-next-line react/no-danger */}
      <section dangerouslySetInnerHTML={{ __html: content.html }} />

      <section>
        <h3>Most recent blog posts:</h3>

        <BlogCards blogs={blogs.edges} />
        <Link to="/blog/">View all Blog Posts</Link>
      </section>

      <section>
        <h3>Most recent Events:</h3>

        <EventsCards events={events.edges} />
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
    blogs: allMarkdownRemark(
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
    events: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^(\/events\/)/"} } }
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
            date(formatString: "MMMM DD, YYYY - HH:SS")
            title
            location
            url_facebook
          }
          html
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
