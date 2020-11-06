import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  connectStateResults,
  ScrollTo,
} from 'react-instantsearch-dom';

import Layout from '../Hoc/Layout';
import SEO from '../SEO/SEO';
import Pagination from '../UI/Pagination/Pagination';
import SearchBox from '../UI/SearchBox/SearchBox';
import BlogCard from '../BlogCard/BlogCard';
import Blog from '../Sections/Blog/Blog';
import LoadingIndicator from '../UI/LoadingIndicator/LoadingIndicator';

const LoadingWrapper = connectStateResults(
  ({ isSearchStalled, searchResults, error }) => (
    <h4>
      {!error ? (
        isSearchStalled ? (
          <LoadingIndicator />
        ) : searchResults?.nbHits ? null : (
          'No results found.'
        )
      ) : (
        <p style={{ color: 'red' }}>{error.message}</p>
      )}
    </h4>
  )
);
const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);
const BlogTemplate = ({ pageContext: { tags } }) => {
  return (
    <Layout id="Layout">
      <SEO title="Blog" />
      <main style={{ maxWidth: 'calc(var(--max-width) - 300px)' }}>
        <Blog taglist={tags}>
          <InstantSearch searchClient={searchClient} indexName="blog">
            <ScrollTo>
              <SearchBox />
            </ScrollTo>
            <LoadingWrapper />
            <Hits hitComponent={BlogCard} />
            <Pagination />
          </InstantSearch>
        </Blog>
      </main>
    </Layout>
  );
};

export default BlogTemplate;

export const blogQuery = graphql`
  query($id: String) {
    site(id: { eq: $id }) {
      id
    }
  }
`;
