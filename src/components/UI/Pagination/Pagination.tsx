import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import FirstIcon from '../../../assets/first.svg';
import LastIcon from '../../../assets/last.svg';
import LeftIcon from '../../../assets/left.svg';
import RightIcon from '../../../assets/right.svg';
import { Nav } from './Pagination.styles';

type Props = {
  blogPages: number;
  currentPage: number;
};

const Pagination: FunctionComponent<Props> = ({ blogPages, currentPage }) => (
  <Nav>
    <div>
      <Link to="/" >
        <input
          type="image"
          alt="first"
          src={FirstIcon}
          disabled={currentPage < 2}
        />
      </Link>
      <Link to={`/${currentPage < 2 ? '' : currentPage - 1}`}>
        <input
          type="image"
          alt="left"
          src={LeftIcon}
          disabled={currentPage < 2}
        />
      </Link>
    </div>
    {currentPage} / {blogPages}
    <div>
      <Link to={`/${currentPage + 1}`}>
        <input
          type="image"
          alt="right"
          src={RightIcon}
          disabled={currentPage === blogPages}
        />
      </Link>
      <Link to={`/${blogPages}`}>
        <input
          type="image"
          alt="last"
          src={LastIcon}
          disabled={currentPage === blogPages}
        />
      </Link>
    </div>
  </Nav>
);

export default Pagination;
