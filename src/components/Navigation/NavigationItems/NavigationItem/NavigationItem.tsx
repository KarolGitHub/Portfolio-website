import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

type Props = {
  link: string;
  children: any;
};

const NavigationItem: FunctionComponent<Props> = ({ link, children }) => (
  <li>
    <Link to={link} activeClassName="active">
      {children}
    </Link>
  </li>
);

export default NavigationItem;
