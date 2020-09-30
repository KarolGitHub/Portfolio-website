import React, { Fragment, FunctionComponent } from 'react';
import { Link } from 'gatsby';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { Logo } from '../Toolbar/Toolbar.styles';
import logo from '../../../assets/logo.png';
import { Wrapper, Nav } from './Sidedrawer.styles';

type Props = {
  open: boolean;
  clicked: () => void;
};

const Sidedrawer: FunctionComponent<Props> = ({ open, clicked }) => {
  return (
    <Fragment>
      <Backdrop open={open} clicked={clicked} />
      <Wrapper {...{ open }} onClick={clicked}>
        <div>
          <Link to="/">
            <Logo src={logo} alt="MyBlog" />
          </Link>
        </div>
        <Nav>
          <NavigationItems />
        </Nav>
      </Wrapper>
    </Fragment>
  );
};

export default Sidedrawer;
