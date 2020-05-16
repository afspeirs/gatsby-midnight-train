import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactUsPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Contact Us" />

    <h2>Contact Us</h2>
    <p>Please find how to contact us below</p>
  </Layout>
);

ContactUsPage.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default ContactUsPage;
