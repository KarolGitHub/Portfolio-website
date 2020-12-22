import React from 'react';

import light from '../../../assets/light.svg';
import dark from '../../../assets/dark.svg';
import { Button } from './ModeButton.styles';
import { useTheme, Theme } from '../../../hooks/useTheme';

const ModeButton: React.FC = () => {
  const [theme, setTheme] = useTheme();
  return (
    <Button
      src={theme === Theme.DARK ? dark : light}
      alt="theme switch"
      onClick={(e) => {
        setTheme(theme);
        e.stopPropagation();
      }}
    />
  );
};

export default ModeButton;
