import React, { FunctionComponent, useState } from 'react';

export const ThemeContext = React.createContext<any>([]);
type Props = {
  children: any;
};
const ThemeProvider: FunctionComponent<Props> = ({ children }) => {
  const getInitialColorMode = () => {
    const storedMode = window.localStorage.getItem('colorMode');
    if (typeof storedMode === 'string') {
      return storedMode;
    }
    return 'light';
  };
  const [colorMode, initColorMode] = useState(getInitialColorMode);

  const setColorMode = (value: string) => {
    initColorMode(value);
    window.localStorage.setItem('colorMode', value);
  };

  return (
    <ThemeContext.Provider value={[colorMode, setColorMode]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;