import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../SEO/SEO';
import Pagination from '../UI/Pagination/Pagination';
import BlogCard from '../BlogCard/BlogCard';
import Layout from '../Hoc/Layout/Layout';

const Tags = ({ data, pageContext: { totalPages, currentPage, tag } }) => {
  const { edges: posts, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  return (
    <Layout>
      <SEO title="Blog" />
      <main>
        <Pagination
          postfix={`/blog/t/${tag}`}
          totalPages={totalPages}
          currentPage={currentPage}
        />
        <h1>{tagHeader}</h1>
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
        {totalCount > 1 && (
          <Pagination
            postfix={`/blog/t/${tag}`}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        )}
      </main>
    </Layout>
  );
};
export default Tags;
export const pageQuery = graphql`
  query($skip: Int, $limit: Int, $tag: String) {
    allMdx(
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: {
          tags: { in: [$tag] }
          type: { eq: "post" }
          published: { eq: true }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
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
