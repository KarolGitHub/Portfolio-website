import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../Sidedrawer/Menu/Menu';
import { Wrapper, Navigation, Logo } from './Toolbar.styles';
import ModeButton from '../../UI/ModeButton/ModeButton';
import { useSiteConfigQuery } from '../../../hooks/useSiteConfigQuery';

type Props = {
  openMenu: () => void;
  title: string;
};

const Toolbar: FunctionComponent<Props> = ({ openMenu, title = `` }) => {
  const siteConfig = useSiteConfigQuery();
  return (
    <Wrapper>
      <Menu clicked={openMenu} />
      <Navigation>
        <Link to="/">
          <Logo src={siteConfig.logo} alt={title} />
        </Link>
        <NavigationItems items={siteConfig.menu} />
      </Navigation>
      <ModeButton />
    </Wrapper>
  );
};

export default Toolbar;
