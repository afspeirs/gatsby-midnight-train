import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BandMembersPage = ({ data, location }) => {
  const content = data.content.edges[0].node;
  const { title, members } = content.frontmatter;

  return (
    <Layout location={location}>
      <SEO title={title} />

      <h2>{title}</h2>

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: content.html }} />

      <div>
        {members.map((member) => (
          <article key={member.name}>
            <header>
              <h3>{member.name}</h3>
              <small>{member.instrument}</small>
            </header>
            <p>{member.description}</p>
          </article>
        ))}
      </div>
    </Layout>
  );
};

BandMembersPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default BandMembersPage;

export const pageQuery = graphql`
  query {
    content: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/pages/band-members/" } } }
    ) {
      edges {
        node {
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
    }
  }
`;
