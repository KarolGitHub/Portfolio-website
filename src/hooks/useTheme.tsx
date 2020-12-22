import { useEffect, Dispatch, SetStateAction, useState } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const isDarkThemeInitial = () => {
  if (typeof window !== 'undefined') {
    const isDarkModePreferred = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const storedTheme = window.localStorage.getItem('theme') === Theme.DARK;
    return storedTheme || isDarkModePreferred;
  } else {
    return false;
  }
};

const useTheme = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
  const [theme, setThemeState] = useState(
    isDarkThemeInitial() ? Theme.DARK : Theme.LIGHT
  );

  const setTheme = () => {
    setThemeState((prevState: Theme) => {
      const nextState = prevState === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      document.body.classList.remove(`theme-${prevState}`);
      document.body.classList.add(`theme-${nextState}`);
      window.localStorage.setItem('theme', `${nextState}`);
      return nextState;
    });
  };

  useEffect(() => {
    document.body.style.setProperty('--transition-theme', 'all 0.5s ease');
  }, []);

  return [theme, setTheme];
};

export { useTheme };
