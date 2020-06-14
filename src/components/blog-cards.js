import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from '../styles/card.module.scss';

const BlogCards = ({ blogs }) => (
  <div className={styles.cardContainer}>
    {blogs.map(({ node }) => {
      const postTitle = node.frontmatter.title || node.fields.slug;

      return (
        <article key={node.fields.slug} className={styles.card}>
          <header>
            <h3>
              <Link to={node.fields.slug}>{postTitle}</Link>
            </h3>
            <small>{node.frontmatter.date}</small>
          </header>
          <section>
            <p
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </section>
        </article>
      );
    })}
  </div>
);

BlogCards.propTypes = {
  blogs: PropTypes.instanceOf(Array).isRequired,
};

export default BlogCards;
