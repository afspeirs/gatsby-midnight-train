import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not Found" />
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

NotFoundPage.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default NotFoundPage;
