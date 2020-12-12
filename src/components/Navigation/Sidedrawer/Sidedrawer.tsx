import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { Wrapper, Navigation, Logo } from './Sidedrawer.styles';
import withConfig from '../../Hoc/withConfig';

type Props = {
  open: boolean;
  clicked: () => void;
  title: string;
  logo: string;
  menu: [];
};

const Sidedrawer: React.FC<Props> = ({
  open,
  clicked,
  title = ``,
  logo,
  menu,
}) => {
  return (
    <Fragment>
      <Backdrop open={open} clicked={clicked} />
      <Wrapper {...{ open }} onClick={clicked}>
        <div>
          <Link to="/">
            <Logo src={logo} alt={title} />
          </Link>
        </div>
        <Navigation>
          <NavigationItems items={menu} />
        </Navigation>
      </Wrapper>
    </Fragment>
  );
};

export default withConfig(Sidedrawer);
