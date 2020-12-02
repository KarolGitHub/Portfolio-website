import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeProvider } from './ThemeContext';

type Props = {
  children: React.ReactNode;
};

const RootWrapper: React.FC<Props> = ({ children }) => (
  <ThemeProvider>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default RootWrapper;
