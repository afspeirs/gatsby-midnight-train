import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data, location }) => {
  const content = data.allMarkdownRemark.edges[0].node;

  return (
    <Layout location={location}>
      <SEO />

      <h2>{content.frontmatter.title}</h2>
      {/* eslint-disable-next-line react/no-danger */}
      <p dangerouslySetInnerHTML={{ __html: content.html }} />

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
    allMarkdownRemark(filter: { fields: { slug: { eq: "/index-content/" } } }) {
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
