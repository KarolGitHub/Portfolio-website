import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../Hoc/Layout';
import SEO from '../SEO/SEO';
import Blog from '../Sections/Blog/Blog';
import PostCard from '../PostCard/PostCard';

const PostTemplate = ({
  data: {
    mdx: {
      frontmatter,
      body,
      fields: {
        readingTime: { text },
      },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <main>
        <Blog>
          <PostCard postData={{ ...frontmatter, readingTime: text }}>
            <MDXProvider>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </PostCard>
        </Blog>
      </main>
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        tags
        published
        author
        date(formatString: "DD MMMM, YYYY")
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
