import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import pages from '../pages';
import { content } from './layout.module.scss';
import styles from './nav.module.scss';

const Nav = ({ pathname }) => (
  <nav className={`${content} ${styles.nav}`}>
    <Link
      className={styles.navLogo}
      to="/"
    >
      LOGO
    </Link>

    <button
      type="button"
      className={styles.navToggle}
      aria-controls="menu"
      aria-expanded="false"
      aria-label="Menu"
    >
      <span />
    </button>

    <ul className={styles.navList}>
      {pages.map((page) => (
        <li key={page.slug} className={styles.navListItem}>
          <Link
            className={pathname === page.slug ? styles.navCurrentLink : styles.navLink}
            to={page.slug}
          >
            {page.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Nav;
