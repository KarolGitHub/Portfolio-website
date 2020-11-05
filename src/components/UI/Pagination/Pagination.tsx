import React, { FunctionComponent } from 'react';
import { connectPagination } from 'react-instantsearch-dom';
import { Link as GatsbyLink } from 'gatsby';

import FirstIcon from '../../../assets/first.svg';
import LastIcon from '../../../assets/last.svg';
import LeftIcon from '../../../assets/left.svg';
import RightIcon from '../../../assets/right.svg';
import { Nav, Wrapper, PagesWrapper } from './Pagination.styles';

type Props = {
  refine: (page: number) => void;
  nbPages: number;
  currentRefinement: number;
  createURL: (page: number) => string;
};

const Pagination: FunctionComponent<Props> = ({
  refine,
  nbPages: totalPages,
  currentRefinement: currentPage,
  createURL,
}) => {
  const Link = (
    href: string,
    page: number,
    icon: any,
    alt: string,
    disabled: boolean
  ) => (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        refine(page);
      }}>
      <input type="image" src={icon} alt={alt} disabled={disabled} />
    </a>
  );
  const urlArray: string[] = [''];
  const Pages = new Array(totalPages).fill(null).map((_, index) => {
    const page = index + 1;
    const URL = createURL(page);
    urlArray.push(URL);
    const fontWeight = currentPage === page ? 'bold' : 'normal';
    const color = currentPage === page ? 'red' : 'inherit';
    return (
      <GatsbyLink
        key={'link' + index}
        to={URL}
        onClick={(event) => {
          event.preventDefault();
          refine(page);
        }}
        style={{ fontWeight: fontWeight, color: color }}>
        {page}
      </GatsbyLink>
    );
  });

  return totalPages ? (
    <Nav>
      <Wrapper>
        {Link(urlArray[1], 1, FirstIcon, 'First', currentPage === 1)}
        {Link(
          urlArray[currentPage - 1],
          currentPage - 1,
          LeftIcon,
          'Previous',
          currentPage === 1
        )}
      </Wrapper>
      <PagesWrapper>{Pages}</PagesWrapper>
      <Wrapper>
        {Link(
          urlArray[currentPage + 1],
          currentPage + 1,
          RightIcon,
          'Next',
          currentPage === totalPages
        )}
        {Link(
          urlArray[totalPages],
          totalPages,
          LastIcon,
          'Last',
          currentPage === totalPages
        )}
      </Wrapper>
    </Nav>
  ) : null;
};
export default connectPagination(Pagination);
