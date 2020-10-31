import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../Sidedrawer/Menu/Menu';
import { Wrapper, Navigation, Logo } from './Toolbar.styles';
import ModeButton from '../../UI/ModeButton/ModeButton';
import withConfig from '../../Hoc/withConfig';

type Props = {
  openMenu: () => void;
  title: string;
  logo: any;
  menu: any;
};

const Toolbar: FunctionComponent<Props> = ({
  openMenu,
  title = ``,
  logo,
  menu,
}) => {
  return (
    <Wrapper id='Toolbar'>
      <Menu clicked={openMenu} />
      <Navigation>
        <Link to="/">
          <Logo src={logo} alt={title} />
        </Link>
        <NavigationItems items={menu} />
      </Navigation>
      <ModeButton />
    </Wrapper>
  );
};

export default withConfig(Toolbar);
