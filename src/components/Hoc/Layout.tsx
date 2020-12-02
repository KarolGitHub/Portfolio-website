import React, { Fragment, useState } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Footer from '../UI/Footer/Footer';
import { useMetaDataQuery } from '../../hooks/useMetaDataQuery';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const { title, author }: MetaData = useMetaDataQuery();
  const [showSideDrawer, setSideDrawer] = useState(false);

  return (
    <Fragment>
      <Toolbar openMenu={() => setSideDrawer(!showSideDrawer)} title={title} />
      <Sidedrawer
        open={showSideDrawer}
        clicked={() => setSideDrawer(false)}
        title={title}
      />
      {children}
      <Footer author={author} />
    </Fragment>
  );
};

export default Layout;
