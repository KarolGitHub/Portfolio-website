import React from 'react';
import { Global, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

export const theme = {
  light: {
    colors: {
      background: `var(--background, #fff)`,
      menuBackground: `var(--menu-background, #d1e1e9)`,
      textDark: `var(--text-dark, #215973)`,
      footerBackground: `var(--footer-background, #f8f9fa)`,
      textSecondary: `var(--text-secondary, #404040)`,
      imageOverlay: `var(--image-overlay, rgba(255, 255, 255, .6))`,
      postShadow: `var(--post-shadow,  rgba(150, 170, 180, .9))`,
      searchBackground: `var(--search-background, #eee)`,
      loading: `var(--loading, #3f324d)`,
    },
  },
  dark: {
    colors: {
      background: `var(--background, #1a1c20)`,
      menuBackground: `var(--menu-background, #215973)`,
      textDark: `var(--text-dark, #214080)`,
      footerBackground: `var(--footer-background, #343a40)`,
      textSecondary: `var(--text-secondary, #d1e1e9)`,
      imageOverlay: `var(--image-overlay, rgba(0, 0, 0, .6))`,
      postShadow: `var(--post-shadow, rgba(150, 170, 180, .5))`,
      searchBackground: `var(--search-background, #050505)`,
      loading: `var(--loading, #f8f9fa)`,
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
      }

      .theme-light {
        --background: #fafafa;
        --menu-background: #d1e1e9;
        --text-dark: #215973;
        --footer-background: #f8f9fa;
        --text-secondary: #404040;
        --image-overlay: rgba(255, 255, 255, 0.6);
        --post-shadow: rgba(150, 170, 180, 0.9);
        --search-background: #eee;
        --loading: #214080;
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
      }

      html,
      body {
        margin: 0;
        :root {
          --max-width: 2300px;
          --light-blue: #6fadc6;
          --blue: #0077b7;
          --green: #4caf50;
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
        font-size: 1rem;
        font-style: normal;
        transition: all 0.5s ease;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      main {
        display: block;
        margin: 40px auto;
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
        transition: all 0.5s ease;
        letter-spacing: 1px;
      }

      p {
        font-size: 0.9rem;
        line-height: 1.2;

        @media (min-width: 600px) {
          font-size: 1.1rem;
          line-height: 1.5;
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
        :hover {
          opacity: 0.7;
        }
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
  transition: all 0.3s ease;
  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  :hover:not([disabled]) {
    -moz-box-shadow: 0 0 10px #ccc;
    -webkit-box-shadow: 0 0 10px #ccc;
    box-shadow: 0 0 10px #ccc;
  }
`;
