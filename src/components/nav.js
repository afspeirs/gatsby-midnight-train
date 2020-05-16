import React from 'react';
import { Link } from 'gatsby';

import pages from '../pages';
import { content } from './layout.module.scss';
import styles from './nav.module.scss';

const Nav = () => (
  <nav className={`${content} ${styles.nav}`}>
    <Link
      className={styles.navLogo}
      to="/"
    >
      Midnight Train
    </Link>

    <ul className={styles.navList}>
      {pages.map((page) => (
        <li key={page.slug} className={styles.navListItem}>
          <Link
            className={styles.navLink}
            activeClassName={styles.activeNavLink}
            to={page.slug}
          >
            {page.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
