import React, { FunctionComponent } from 'react';

import light from '../../../assets/light.svg';
import dark from '../../../assets/dark.svg';
import { Button } from './ModeButton.styles';
import { useTheme } from '../../../context/ThemeContext';

const ModeButton: FunctionComponent = () => {
  const theme = useTheme();
  return (
    <Button
      src={theme.dark ? dark : light}
      alt="theme switch"
      onClick={(e) => {
        theme.toggleDark();
        e.stopPropagation;
      }}
    />
  );
};

export default ModeButton;
