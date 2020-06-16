import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import EventsCards from '../components/events-cards';
import Layout from '../components/layout';
import SEO from '../components/seo';

const EventsPage = ({ data, location }) => {
  const { content, events } = data;
  const { title } = content.frontmatter;

  return (
    <Layout location={location}>
      <SEO title={title} />

      <h2>{title}</h2>

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: content.html }} />

      <EventsCards events={events.nodes} />
    </Layout>
  );
};

EventsPage.propTypes = {
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

export default EventsPage;

export const pageQuery = graphql`
  query {
    content: markdownRemark(fields: { slug: { eq: "/pages/events/" } }) {
      frontmatter {
        title
      }
      html
    }
    events: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^(\/events\/)/"} } }
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
