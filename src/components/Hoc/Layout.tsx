import React, { Fragment, useState } from 'react';

import Footer from '../UI/Footer/Footer';
import { useMetaDataQuery } from '../../hooks/useMetaDataQuery';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';
import Navbar from '../Navigation/NavBar/Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const { title, author }: MetaData = useMetaDataQuery();
  const [showSideDrawer, setSideDrawer] = useState(false);

  return (
    <Fragment>
      <Navbar openMenu={() => setSideDrawer(!showSideDrawer)} title={title} />
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
