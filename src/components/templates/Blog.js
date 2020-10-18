import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../Hoc/Layout';
import SEO from '../SEO/SEO';
import BlogCard from '../BlogCard/BlogCard';
import Pagination from '../UI/Pagination/Pagination';

const Blog = ({ data, pageContext: { totalPages, currentPage } }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <SEO title="Blog" />
      <main>
        <Pagination
          prefix="/blog"
          totalPages={totalPages}
          currentPage={currentPage}
        />
        {posts.map(({ node: post }) => {
          const title = post.frontmatter.title || 'Untitled';
          return (
            <BlogCard
              key={post.id}
              slug={post.fields.slug}
              title={title}
              date={post.frontmatter.date}
              tags={post.frontmatter.tags}
              author={post.frontmatter.author}
              readingTime={post.fields.readingTime.text}
              excerpt={post.excerpt}
              image={post.frontmatter.image.childImageSharp.fluid}
            />
          );
        })}
        <Pagination
          prefix="/blog"
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </main>
    </Layout>
  );
};

export default Blog;

export const blogQuery = graphql`
  query blogListQuery($skip: Int, $limit: Int) {
    allMdx(
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: "post" }, published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
            author
            published
            image {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;
