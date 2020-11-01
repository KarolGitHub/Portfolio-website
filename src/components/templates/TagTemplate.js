import React, { useMemo } from 'react';
import { Link, graphql } from 'gatsby';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  connectStateResults,
  Configure,
  ScrollTo,
} from 'react-instantsearch-dom';

import SEO from '../SEO/SEO';
import Pagination from '../UI/Pagination/Pagination';
import BlogCard from '../BlogCard/BlogCard';
import SearchBox from '../UI/SearchBox/SearchBox';
import Layout from '../Hoc/Layout';
import Blog from '../Sections/Blog/Blog';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

const TagTemplate = ({ pageContext: { id: tag, tags } }) => {
  const LoadingIndicator = connectStateResults(
    ({ isSearchStalled, searchResults, tag, error }) => (
      <h4>
        {!error ? (
          isSearchStalled ? (
            'Loading...'
          ) : searchResults?.nbHits ? (
            `${searchResults.nbHits} post${
              searchResults.nbHits === 1 ? '' : 's'
            } 
            tagged with "${tag}"`
          ) : (
            'No results found.'
          )
        ) : (
          <p style={{ color: 'red' }}>{error.message}</p>
        )}
      </h4>
    )
  );

  return (
    <Layout>
      <SEO title="Blog" />
      <main>
        <Blog taglist={tags}>
          <InstantSearch searchClient={searchClient} indexName="blog">
            <Configure facetFilters={[[`_tags:${tag}`]]} />
            <ScrollTo>
              <SearchBox />
            </ScrollTo>
            <LoadingIndicator tag={tag} />
            <Hits hitComponent={BlogCard} />
            <Pagination />
          </InstantSearch>
        </Blog>
      </main>
    </Layout>
  );
};
export default TagTemplate;
export const tagQuery = graphql`
  query($id: String) {
    site(id: { eq: $id }) {
      id
    }
  }
`;
