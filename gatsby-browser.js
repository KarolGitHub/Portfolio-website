import React from 'react';
import ThemeProvider from './src/context/ThemeProvider';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
