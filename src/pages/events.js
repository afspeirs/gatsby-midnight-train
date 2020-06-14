import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import EventsCards from '../components/events-cards';
import Layout from '../components/layout';
import SEO from '../components/seo';

const EventsPage = ({ data, location }) => {
  const content = data.content.edges[0].node;
  const { title } = content.frontmatter;
  const events = data.events.edges;

  return (
    <Layout location={location}>
      <SEO title={title} />

      <h2>{title}</h2>

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: content.html }} />

      <EventsCards events={events} />
    </Layout>
  );
};

EventsPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default EventsPage;

export const pageQuery = graphql`
  query {
    events: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^(\/events\/)/"} } }
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
      filter: { fields: { slug: { eq: "/pages/events/" } } }
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
