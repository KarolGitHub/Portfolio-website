import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../Sidedrawer/Menu/Menu';
import { Wrapper, Navigation, Logo } from './Toolbar.styles';
import logo from '../../../assets/logo.png';
import ModeButton from '../../UI/ModeButton/ModeButton';

type Props = {
  openMenu: () => void;
  title: string;
};

const Toolbar: FunctionComponent<Props> = ({ title, openMenu }) => {
  return (
    <Wrapper>
      <Menu clicked={openMenu} />
      <Navigation>
        <Link to="/">
          <Logo src={logo} alt={title} />
        </Link>
        <NavigationItems />
      </Navigation>
      <ModeButton />
    </Wrapper>
  );
};

export default Toolbar;
