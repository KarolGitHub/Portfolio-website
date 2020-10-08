import React, { FunctionComponent, useContext, useState } from 'react';
import { ThemeProvider } from 'emotion-theming';

import Toolbar from '../../Navigation/Toolbar/Toolbar';
import Footer from '../../UI/Footer/Footer';
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from '../../../styles/GlobalStyles';
import { ModeContext } from '../../../context/ModeProvider';
import { useMetaDataQuery } from '../../../hooks/useMetaDataQuery';
import Sidedrawer from '../../Navigation/Sidedrawer/Sidedrawer';

type Props = {
  children: any;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  const data: MetaData = useMetaDataQuery();
  const [showSideDrawer, setSideDrawer] = useState(false);
  const [colorMode] = useContext(ModeContext);
  const currentColorMode = colorMode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentColorMode}>
      <GlobalStyles theme={currentColorMode} />
      <Toolbar
        openMenu={() => setSideDrawer(!showSideDrawer)}
        title={data.title}
      />
      <Sidedrawer
        open={showSideDrawer}
        clicked={() => setSideDrawer(false)}
        title={data.title}
      />
      {children}
      <Footer author={data.author} />
    </ThemeProvider>
  );
};

export default Layout;
