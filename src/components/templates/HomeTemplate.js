import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Hoc/Layout';
import SEO from '../SEO/SEO';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const HomeTemplate = ({ data: { mdx } }) => {
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

export default HomeTemplate;

export const homeQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }, frontmatter: { type: { eq: "home" } }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
  }
`;
