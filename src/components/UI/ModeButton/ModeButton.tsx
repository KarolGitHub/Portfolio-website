import React, { FunctionComponent, useContext } from 'react';
// Images
import light from '../../../assets/light.svg';
import dark from '../../../assets/dark.svg';

// Styles
import { Button } from './ModeButton.styles';
import { ModeContext } from '../../../context/ModeProvider';

const ModeButton: FunctionComponent = () => {
  const [colorMode, setColorMode] = useContext(ModeContext);
  return (
    <Button
      src={colorMode === 'dark' ? dark : light}
      alt="mode"
      onClick={() =>
        setColorMode(colorMode === 'dark' ? 'light' : 'dark')
      }
    />
  );
};

export default ModeButton;
