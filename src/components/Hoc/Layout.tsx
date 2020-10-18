import React, { FunctionComponent, useContext, useState } from 'react';
import { ThemeProvider } from 'emotion-theming';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Footer from '../UI/Footer/Footer';
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from '../../styles/GlobalStyles';
import { ThemeContext } from '../../context/ThemeProvider';
import { useMetaDataQuery } from '../../hooks/useMetaDataQuery';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

type Props = {
  children: any;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  const { title, author }: MetaData = useMetaDataQuery();
  const [showSideDrawer, setSideDrawer] = useState(false);
  const [colorMode] = useContext(ThemeContext);
  const currentColorMode = colorMode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentColorMode}>
      <GlobalStyles theme={currentColorMode} />
      <Toolbar openMenu={() => setSideDrawer(!showSideDrawer)} title={title} />
      <Sidedrawer
        open={showSideDrawer}
        clicked={() => setSideDrawer(false)}
        title={title}
      />
      {children}
      <Footer author={author} />
    </ThemeProvider>
  );
};

export default Layout;
