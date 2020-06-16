import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from '../styles/card.module.scss';

const EventsCards = ({ events }) => (
  <div className={styles.cardContainer}>
    {events.map((event) => {
      const postTitle = event.frontmatter.title || event.fields.slug;

      return (
        <article key={event.fields.slug} className={styles.card}>
          <header>
            <h3>
              <Link to={event.fields.slug}>{postTitle}</Link>
            </h3>
            <small>{event.frontmatter.date}</small>
            <br />
            <small>{event.frontmatter.location}</small>
          </header>
          <section>
            <p
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: event.excerpt,
              }}
            />
          </section>
        </article>
      );
    })}
  </div>
);

EventsCards.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      excerpt: PropTypes.string,
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        location: PropTypes.string,
        url_facebook: PropTypes.string,
        // url_venue: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  ).isRequired,
};

export default EventsCards;
