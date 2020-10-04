import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../Hoc/Layout/Layout';
import SEO from '../SEO/SEO';

const Blog = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <SEO title="Blog" />
      <ul>
        {posts.map(({ node: post }) => {
          return (
            <li key={post.id}>
              <h2>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </h2>
              <div>
                <span>
                  Posted on {post.frontmatter.date} <span> / </span>{' '}
                  {post.timeToRead} min read
                </span>
              </div>
              <p>{post.excerpt}</p>
              <div>
                <Link to={post.fields.slug}>Read More</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Blog;

export const blogQuery = graphql`
  query blogListQuery {
    allMdx(
      filter: { frontmatter: { type: { eq: "post" }, published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD MMMM, YYYY")
            published
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
