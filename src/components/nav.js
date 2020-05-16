import React, { useState } from 'react';
import { Link } from 'gatsby';

import pages from '../pages';
import { content } from './layout.module.scss';
import styles from './nav.module.scss';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <nav className={`${content} ${styles.nav}`}>
      <Link
        className={styles.navLogo}
        to="/"
      >
        LOGO
      </Link>

      <button
        type="button"
        className={toggle ? styles.navToggleExpanded : styles.navToggle}
        aria-controls="menu"
        aria-expanded={toggle}
        aria-label="Menu"
        onClick={onToggle}
      >
        <span />
      </button>

      <ul className={toggle ? styles.navListExpanded : styles.navList}>
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
};

export default Nav;
