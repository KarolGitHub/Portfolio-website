import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import FirstIcon from '../../../assets/first.svg';
import LastIcon from '../../../assets/last.svg';
import LeftIcon from '../../../assets/left.svg';
import RightIcon from '../../../assets/right.svg';
import { Nav } from './Pagination.styles';

type Props = {
  postfix: string;
  totalPages: number;
  currentPage: number;
};

const Pagination: FunctionComponent<Props> = ({
  postfix,
  totalPages,
  currentPage,
}) => (
  <Nav>
    <div>
      <Link to={`${postfix}/`}>
        <input
          type="image"
          alt="first"
          src={FirstIcon}
          disabled={currentPage < 2}
        />
      </Link>
      <Link to={`${postfix}/${currentPage < 3 ? '' : currentPage - 1}`}>
        <input
          type="image"
          alt="left"
          src={LeftIcon}
          disabled={currentPage < 2}
        />
      </Link>
    </div>
    {currentPage} / {totalPages}
    <div>
      <Link to={`${postfix}/${currentPage + 1}`}>
        <input
          type="image"
          alt="right"
          src={RightIcon}
          disabled={currentPage === totalPages}
        />
      </Link>
      <Link to={`${postfix}/${totalPages}`}>
        <input
          type="image"
          alt="last"
          src={LastIcon}
          disabled={currentPage === totalPages}
        />
      </Link>
    </div>
  </Nav>
);

export default Pagination;
