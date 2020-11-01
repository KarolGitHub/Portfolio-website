import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Hoc/Layout';
import SEO from '../SEO/SEO';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Image from '../Image/Image';

const PostTemplate = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Image fluid={mdx.frontmatter.image.childImageSharp.fluid} />
      <main>
        <h2>{mdx.frontmatter.title}</h2>
        <MDXProvider>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
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
        title
        date
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
