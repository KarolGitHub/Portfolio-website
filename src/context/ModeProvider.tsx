import React, { FunctionComponent, useState } from 'react';

export const ModeContext = React.createContext<any>([]);
type Props = {
  children: any;
};
const ModeProvider: FunctionComponent<Props> = ({ children }) => {
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
    <ModeContext.Provider value={[colorMode, setColorMode]}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
