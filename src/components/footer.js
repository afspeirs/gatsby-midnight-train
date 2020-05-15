import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import pages from '../pages';
import styles from './footer.module.scss';
import { content } from './layout.module.scss';

const Footer = ({ pathname }) => (
  <footer className={styles.footer}>
    <div className={`${content} ${styles.footerContent}`}>
      <nav>
        {pages.map((page, index) => (
          <>
            <Link
              to={page.slug}
              className={pathname === page.slug ? styles.footerCurrentLink : styles.footerLink}
            >
              {page.title}
            </Link>
            {pages.length - 1 !== index ? ' - ' : ''}
          </>
        ))}
      </nav>
      <span>
        <a
          className={styles.footerLink}
          href="https://www.facebook.com/originalmidnighttrain/"
        >
          @originalmidnighttrain
        </a>
      </span>
    </div>
  </footer>
);

Footer.propTypes = {
  pathname: PropTypes.string.isRequired,
};


export default Footer;
