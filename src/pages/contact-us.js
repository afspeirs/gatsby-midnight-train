import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactUsPage = ({ data, location }) => {
  const { content } = data;
  const { title } = content.frontmatter;

  return (
    <Layout location={location}>
      <SEO title={title} />

      <h2>{title}</h2>

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </Layout>
  );
};

ContactUsPage.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default ContactUsPage;

export const pageQuery = graphql`
  query {
    content: markdownRemark(fields: { slug: { eq: "/pages/contact-us/" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
