import React, { FunctionComponent } from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeProvider } from './ThemeContext';

type Props = {
  children: any;
};

const RootWrapper: FunctionComponent<Props> = ({ children }) => (
  <ThemeProvider>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default RootWrapper;
