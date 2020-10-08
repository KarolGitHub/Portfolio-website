import React, { Fragment, FunctionComponent } from 'react';
import { Link } from 'gatsby';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { Logo } from '../Toolbar/Toolbar.styles';
import { Wrapper, Navigation } from './Sidedrawer.styles';
import { useSiteConfigQuery } from '../../../hooks/useSiteConfigQuery';

type Props = {
  open: boolean;
  clicked: () => void;
  title: string;
};

const Sidedrawer: FunctionComponent<Props> = ({ open, clicked, title = ``}) => {
  const siteConfig = useSiteConfigQuery();
  return (
    <Fragment>
      <Backdrop open={open} clicked={clicked} />
      <Wrapper {...{ open }} onClick={clicked}>
        <div>
          <Link to="/">
            <Logo src={siteConfig.logo.publicURL} alt={title} />
          </Link>
        </div>
        <Navigation>
          <NavigationItems items={siteConfig.menu} />
        </Navigation>
      </Wrapper>
    </Fragment>
  );
};

export default Sidedrawer;
