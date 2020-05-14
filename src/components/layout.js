import React from 'react';
import PropTypes from 'prop-types';

import Nav from './nav';

const Layout = ({ children, location }) => (
  <div>
    <header>
      <Nav pathname={location.pathname} />
    </header>

    <main>{children}</main>

    <footer>
      © 2020, Built with
      {' '}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
