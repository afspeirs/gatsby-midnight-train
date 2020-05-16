import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO />

    <h2>Home</h2>
    <p>Welcome to Midnight Train</p>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default IndexPage;
