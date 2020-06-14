import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const EventsPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <nav>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            <Link to="/events/">
              ←
              {' '}
              Back to Events
            </Link>
          </li>
        </ul>
        <hr />
      </nav>

      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
        </header>
        <p>{post.frontmatter.date}</p>
        <p>{post.frontmatter.location}</p>
        <p>
          <a href={post.frontmatter.url_facebook}>
            View event on Facebook
          </a>
        </p>

        {/* eslint-disable-next-line react/no-danger */}
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <nav>
        <hr />
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ←
                {' '}
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
                {' '}
                →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

EventsPostTemplate.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  pageContext: PropTypes.instanceOf(Object).isRequired,
};

export default EventsPostTemplate;

export const pageQuery = graphql`
  query EventsPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        location
        url_facebook
        # url_venue
      }
      html
      id
    }
  }
`;
