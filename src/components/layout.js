import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';
import Nav from './nav';
import '../styles/index.scss';
import styles from './layout.module.scss';

const Layout = ({ children, location }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <Nav pathname={location.pathname} />
    </header>

    <main className={`${styles.content} ${styles.main}`}>
      {children}
    </main>

    <Footer pathname={location.pathname} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
