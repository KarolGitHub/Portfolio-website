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

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

const Tags = ({ pageContext: { id: tag } }) => {
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
        <InstantSearch searchClient={searchClient} indexName="blog">
          <Configure facetFilters={[[`_tags:${tag}`]]} />
          <ScrollTo>
            <SearchBox />
          </ScrollTo>
          <LoadingIndicator tag={tag} />
          <Hits hitComponent={BlogCard} />
          <Pagination />
        </InstantSearch>
      </main>
    </Layout>
  );
};
export default Tags;
export const tagsQuery = graphql`
  query($id: String) {
    site(id: { eq: $id }) {
      id
    }
  }
`;
