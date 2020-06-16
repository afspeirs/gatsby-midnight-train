import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import EventsCards from '../components/events-cards';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data, location }) => {
  const { content, events } = data;
  const { title } = content.frontmatter;

  return (
    <Layout location={location}>
      <SEO />

      <h2>{title}</h2>

      {/* eslint-disable-next-line react/no-danger */}
      <section dangerouslySetInnerHTML={{ __html: content.html }} />

      <section>
        <h3>Most recent Events:</h3>

        <EventsCards events={events.nodes} />
        <Link to="/events/">View all Events</Link>
      </section>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
    events: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          excerpt: PropTypes.string,
          fields: PropTypes.shape({
            slug: PropTypes.string,
          }),
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.string,
            location: PropTypes.string,
            url_facebook: PropTypes.string,
            // url_venue: PropTypes.string,
          }),
          html: PropTypes.string,
        }),
      ),
    }),
  }).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    content: markdownRemark(fields: { slug: { eq: "/pages/" } }) {
      frontmatter {
        title
      }
      html
    }
    events: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^(\/events\/)/"} } }
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY - HH:SS")
          location
          title
          url_facebook
          # url_venue
        }
        html
      }
    }
  }
`;
