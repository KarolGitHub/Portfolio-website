import React from 'react';
import { Link } from 'gatsby';

type Props = {
  link: string;
  children: React.ReactNode;
};

const NavigationItem: React.FC<Props> = ({ link, children }) => (
  <li>
    <Link to={link} partiallyActive={link !== '/'} activeClassName="active">
      {children}
    </Link>
  </li>
);

export default NavigationItem;
