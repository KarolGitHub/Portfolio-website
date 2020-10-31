import React from 'react';
import { SearchBox as Search} from 'react-instantsearch-dom';
import { Wrapper } from './SearchBox.styles';

const SearchBox = () => {
  return (
    <Wrapper>
      <Search searchAsYouType={false} showLoadingIndicator />
    </Wrapper>
  );
};

export default SearchBox;
