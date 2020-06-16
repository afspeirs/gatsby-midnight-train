import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import styles from '../styles/card.module.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BandMembersPage = ({ data, location }) => {
  const { content } = data;
  const { members, title } = content.frontmatter;

  return (
    <Layout location={location}>
      <SEO title={title} />

      <h2>{title}</h2>

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: content.html }} />

      <div className={styles.cardContainer}>
        {members.map((member) => (
          <article key={member.name} className={styles.card}>
            <header>
              <h3>{member.name}</h3>
              <small>{member.instrument}</small>
            </header>
            <section>
              <p>{member.description}</p>
            </section>
          </article>
        ))}
      </div>
    </Layout>
  );
};

BandMembersPage.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.shape({
      frontmatter: PropTypes.shape({
        members: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            instrument: PropTypes.string,
            description: PropTypes.string,
          }),
        ),
        title: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default BandMembersPage;

export const pageQuery = graphql`
  query {
    content: markdownRemark(fields: { slug: { eq: "/pages/band-members/" } }) {
      frontmatter {
        title
        members {
          name
          instrument
          description
        }
      }
      html
    }
  }
`;
