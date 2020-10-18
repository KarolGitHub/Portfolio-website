import React, { Fragment, FunctionComponent, useMemo } from 'react';
import { Link } from 'gatsby';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { Logo } from '../Toolbar/Toolbar.styles';
import { Wrapper, Navigation } from './Sidedrawer.styles';
import withConfig from '../../Hoc/withConfig';

type Props = {
  open: boolean;
  clicked: () => void;
  title: string;
  logo: any;
  menu: any;
};

const Sidedrawer: FunctionComponent<Props> = ({
  open,
  clicked,
  title = ``,
  logo,
  menu,
}) => {
  const backdrop = useMemo(
    () => <Backdrop open={open} clicked={clicked} />,
    []
  );
  return (
    <Fragment>
      {backdrop}
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
