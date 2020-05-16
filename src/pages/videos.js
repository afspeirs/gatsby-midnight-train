import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const VideosPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Videos" />

    <h2>Videos</h2>
    <p>View our videos below</p>
  </Layout>
);

VideosPage.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default VideosPage;
