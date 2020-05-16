import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import pages from '../pages';
import styles from './footer.module.scss';
import { content } from './layout.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            facebook
          }
        }
      }
    }
  `);

  const { facebook } = data.site.siteMetadata.social;

  return (
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
            href={`https://www.facebook.com/${facebook}/`}
          >
            {`@${facebook}`}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
