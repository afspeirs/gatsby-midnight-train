import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import styles from '../styles/card.module.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPage = ({ data, location }) => {
  const posts = data.blog.edges;
  const content = data.content.edges[0].node;
  const { title } = content.frontmatter;

  return (
    <Layout location={location}>
      <SEO title={title} />

      <h2>{title}</h2>

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: content.html }} />

      <div className={styles.cardContainer}>
        {posts.map(({ node }) => {
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
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    blog: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^(\/blog\/)/"} } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    content: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/pages/blog/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
