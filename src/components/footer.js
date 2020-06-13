import React, { Fragment } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import styles from './footer.module.scss';
import { content } from './layout.module.scss';

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
          social {
            facebook
          }
        }
      }
    }
  `);

  const { menuLinks, social } = site.siteMetadata;

  return (
    <footer className={styles.footer}>
      <div className={`${content} ${styles.footerContent}`}>
        <nav>
          {menuLinks.map((page, index) => (
            <Fragment key={page.link}>
              <Link
                activeClassName={styles.activeFooterLink}
                className={styles.footerLink}
                to={page.link}
              >
                {page.name}
              </Link>
              {menuLinks.length - 1 !== index ? ' | ' : ''}
            </Fragment>
          ))}
        </nav>
        <span>
          <a
            className={styles.footerLink}
            href={`https://www.facebook.com/${social.facebook}/`}
          >
            {`@${social.facebook}`}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
