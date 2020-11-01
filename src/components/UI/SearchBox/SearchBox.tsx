import { Link } from 'gatsby';
import React from 'react';
import { SearchBox as Search } from 'react-instantsearch-dom';
import { Wrapper, LinkWrapper } from './SearchBox.styles';

const SearchBox = () => {
  return (
    <Wrapper>
      <Search searchAsYouType={false} showLoadingIndicator />
      <LinkWrapper>
        <Link to="/blog/tags">Tags</Link>
      </LinkWrapper>
    </Wrapper>
  );
};

export default SearchBox;
