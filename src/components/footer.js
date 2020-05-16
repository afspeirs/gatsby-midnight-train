import React from 'react';
import { Link } from 'gatsby';

import pages from '../pages';
import styles from './footer.module.scss';
import { content } from './layout.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`${content} ${styles.footerContent}`}>
      <nav>
        {pages.map((page, index) => (
          <>
            <Link
              to={page.slug}
              className={styles.footerLink}
              activeClassName={styles.activeFooterLink}
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

export default Footer;
