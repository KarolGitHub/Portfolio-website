import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../Hoc/Layout';
import SEO from '../SEO/SEO';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Page = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <main>
        <h2>{mdx.frontmatter.title}</h2>
        <MDXProvider>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </main>
    </Layout>
  );
};

export default Page;

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }, frontmatter: { type: { eq: "page" } }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
    site {
      siteMetadata {
        social {
          url
          name
        }
      }
    }
  }
`;
