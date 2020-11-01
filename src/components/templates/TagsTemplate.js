import React, { useMemo } from 'react';
import { Link, graphql } from 'gatsby';

import SEO from '../SEO/SEO';
import Layout from '../Hoc/Layout';
import Blog from '../Sections/Blog/Blog';
import TagCards from '../TagCards/TagCards';

const TagsTemplate = ({ pageContext: { tags } }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <main>
        <Blog>
          <TagCards tags={tags} />
        </Blog>
      </main>
    </Layout>
  );
};
export default TagsTemplate;
export const tagsQuery = graphql`
  query {
    site(id: { eq: "tags" }) {
      id
    }
  }
`;
