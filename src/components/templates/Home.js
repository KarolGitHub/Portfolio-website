import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../Hoc/Layout/Layout';
import SEO from '../SEO/SEO';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Home = ({ data: { mdx } }) => {
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

export default Home;

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
