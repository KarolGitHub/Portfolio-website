import React from 'react';
import { Global, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import welcomeDarkBg from '../assets/welcome-dark.png';
import welcomeLightBg from '../assets/welcome-light.png';

export const theme = {
  light: {
    colors: {
      background: `var(--background, #fff)`,
      menuBackground: `var(--menu-background, #d1e1e9)`,
      textDark: `var(--text-dark, #215973)`,
      footerBackground: `var(--footer-background, #e7e7e7)`,
      textSecondary: `var(--text-secondary, #404040)`,
      imageOverlay: `var(--image-overlay, rgba(255, 255, 255, .6))`,
      postShadow: `var(--post-shadow,  rgba(150, 170, 180, .9))`,
      searchBackground: `var(--search-background, #eee)`,
      loading: `var(--loading, #3f324d)`,
      linearBackground: `var(--linear-background, linear-gradient(90deg, #fafafa 0%, #e7e7e7 100%))`,
      radialBackground: `var(--radial-background, radial-gradient(circle,#4cff50 50%, #0fad4a 100%))`,
      heroBackground: `var(--hero-background, linear-gradient(
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.4)
      ),
      url(${welcomeLightBg}))`,
    },
  },
  dark: {
    colors: {
      background: `var(--background, #1a1c20)`,
      menuBackground: `var(--menu-background, #215973)`,
      textDark: `var(--text-dark, #d1e1e9)`,
      footerBackground: `var(--footer-background, #343a40)`,
      textSecondary: `var(--text-secondary, #d1e1e9)`,
      imageOverlay: `var(--image-overlay, rgba(0, 0, 0, .6))`,
      postShadow: `var(--post-shadow, rgba(150, 170, 180, .5))`,
      searchBackground: `var(--search-background, #050505)`,
      loading: `var(--loading, #f8f9fa)`,
      linearBackground: `var(--linear-background, linear-gradient(90deg, #1a1c20 0%, #343a40 100%))`,
      radialBackground: `var(--radial-background, radial-gradient(circle,#0fad4a 50%, #4cff50 100%))`,
      heroBackground: `var(--hero-background, url(${welcomeLightBg}))`,
    },
  },
};

export const GlobalStyles: React.FC<{}> = withTheme((props) => (
  <Global
    {...props}
    styles={css`
      * {
        box-sizing: border-box;
        outline: none;
        margin: 0;
        padding: 0;
      }

      .theme-light {
        --background: #fafafa;
        --menu-background: #d1e1e9;
        --text-dark: #215973;
        --footer-background: #e7e7e7;
        --text-secondary: #404040;
        --image-overlay: rgba(255, 255, 255, 0.6);
        --post-shadow: rgba(150, 170, 180, 0.9);
        --search-background: #eee;
        --loading: #214080;
        --linear-background: linear-gradient(90deg, #fafafa 0%, #e7e7e7 100%);
        --radial-background: radial-gradient(circle, #4cff50 50%, #0fad4a 100%);
        --hero-background: linear-gradient(
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.4)
          ),
          url(${welcomeLightBg});
      }
      .theme-dark {
        --background: #1a1c20;
        --menu-background: #215973;
        --text-dark: #d1e1e9;
        --footer-background: #343a40;
        --text-secondary: #d1e1e9;
        --image-overlay: rgba(0, 0, 0, 0.6);
        --post-shadow: rgba(150, 170, 180, 0.5);
        --search-background: #3f324d;
        --loading: #f8f9fa;
        --linear-background: linear-gradient(90deg, #1a1c20 0%, #343a40 100%);
        --radial-background: radial-gradient(circle, #0fad4a 50%, #4cff50 100%);
        --hero-background: url(${welcomeDarkBg});
      }

      html,
      body {
        margin: 0;
        :root {
          --max-width: 2300px;
          --light-blue: #6fadc6;
          --blue: #0077b7;
          --green: #4cff50;
          --red: #f93f3f;
          --backdrop: rgba(0, 0, 0, 0.5);
        }
      }

      body {
        background: ${props.theme.colors.background};
        color: ${props.theme.colors.textSecondary};
        font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
          'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', Catamaran, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1.25rem;
        font-style: normal;
        transition: all 0.5s ease;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      main {
        display: block;
        margin: 0 auto;
        max-width: calc(var(--max-width) - 1000px);
        min-height: 100vh;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: var(--light-blue);
        font-family: 'Muli Black', Arial, Helvetica, sans-serif;
        letter-spacing: 1px;
        margin: 10px 0px 16px;
      }

      p {
        font-size: 1rem;
        line-height: 1.5rem;
        margin-bottom: 10px;

        @media (min-width: 600px) {
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
      }

      h2 {
        font-size: 1.5rem;
        letter-spacing: 1.6px;

        @media (min-width: 600px) {
          font-size: 2rem;
        }
      }

      h3 {
        font-size: 1.3rem;
        letter-spacing: 1.5px;

        @media (min-width: 600px) {
          font-size: 1.5rem;
        }
      }

      ul {
        list-style: none;
        padding: 0;
      }

      a {
        text-decoration: none;
      }
    `}
  />
));

export const cardStyles = (props: any) => css`
  padding: 0;
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0 7px 30px -10px ${props.theme.colors.postShadow};
  -moz-box-shadow: 0 7px 30px -10px ${props.theme.colors.postShadow};
  box-shadow: 0 7px 30px -10px ${props.theme.colors.postShadow};
`;

export const buttonStyles = () => css`
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.5s ease, box-shadow 0.3s ease,
    transform 0.3s ease;
  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  :hover:not([disabled]) {
    -moz-box-shadow: 0 0 10px #ccc;
    -webkit-box-shadow: 0 0 10px #ccc;
    box-shadow: 0 0 10px #ccc;
    transform: scale(1.1);
  }
`;
