import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import { content } from './layout.module.scss';
import styles from './nav.module.scss';
import Logo from '../img/logo';

const Nav = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              link
              name
            }
          }
        }
      }
    `,
  );

  const { menuLinks } = site.siteMetadata;

  return (
    <nav className={`${content} ${styles.nav}`}>
      <Link className={styles.navLogo} to="/">
        <Logo />
      </Link>

      <ul className={styles.navList}>
        {menuLinks.map((page) => (
          <li key={page.link} className={styles.navListItem}>
            <Link
              activeClassName={styles.activeNavLink}
              className={styles.navLink}
              to={page.link}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
