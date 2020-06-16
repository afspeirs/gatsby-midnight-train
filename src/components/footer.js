import React, { Fragment } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import styles from './footer.module.scss';
import { content } from './layout.module.scss';
import IconFacebook from '../img/icon-facebook';
import IconSoundcloud from '../img/icon-soundcloud';
import IconYoutube from '../img/icon-youtube';

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              link
              name
            }
            social {
              facebook
              soundcloud
              youtube
            }
          }
        }
      }
    `,
  );

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
        <span className={styles.footerIconContainer}>
          <a className={styles.footerIcon} href={social.soundcloud} title="Soundcloud">
            <IconSoundcloud />
          </a>
          <a className={styles.footerIcon} href={social.youtube} title="YouTube">
            <IconYoutube />
          </a>
          <a className={styles.footerIcon} href={social.facebook} title="Facebook">
            <IconFacebook />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
