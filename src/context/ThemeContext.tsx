import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { theme as themeData } from '../styles/GlobalStyles';

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const initContextData = {
  dark: false,
  toggleDark: () => {},
};

export const ThemeContext = React.createContext(initContextData);

const isDarkModePreferred = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

const useTheme = () => React.useContext(ThemeContext);

const useDarkMode = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
  const [theme, setThemeState] = React.useState(Theme.LIGHT);

  const setTheme = () => {
    setThemeState((prevState) => {
      const nextState = prevState === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      document.body.classList.remove(`theme-${prevState}`);
      document.body.classList.add(`theme-${nextState}`);
      window.localStorage.setItem('theme', `${nextState}`);
      return nextState;
    });
  };

  React.useLayoutEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    if (!storedTheme && isDarkModePreferred()) {
      return setTheme();
    }

    if (!storedTheme || storedTheme === theme) {
      return;
    }
    setTheme();
  }, [theme]);

  return [theme, setTheme];
};

type Props = {
  children: any;
};
const ThemeProvider: FunctionComponent<Props> = ({ children }) => {
  const [theme, setTheme] = useDarkMode();
  const themeLoaded = theme === Theme.DARK ? themeData.dark : themeData.light;
  const toggleDark = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <EmotionThemeProvider theme={themeLoaded}>
      <ThemeContext.Provider
        value={{
          dark: theme === Theme.DARK,
          toggleDark,
        }}>
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export { ThemeProvider, useTheme };
