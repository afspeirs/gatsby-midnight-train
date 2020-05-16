import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BandMembers = ({ location }) => (
  <Layout location={location}>
    <SEO title="Band Members" />

    <h2>Band Members</h2>
    <p>Please find a list of our Band Members below</p>
  </Layout>
);

BandMembers.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default BandMembers;
