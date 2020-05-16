import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const EventsPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Events" />

    <h2>Events</h2>
    <p>Please find a list of our events below</p>
  </Layout>
);

EventsPage.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default EventsPage;
