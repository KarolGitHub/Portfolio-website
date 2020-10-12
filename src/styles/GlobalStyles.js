import React from 'react';
import { Global, css } from '@emotion/core';
import { rgba } from 'emotion-rgba';

export const colors = {
  white: '#fff',
  light: '#f8f9fa',
  gray: '#343a40',
  darkGray: '#1a1c20',
  deepDarkGray: '#404040',
  blueShade1: '#215973',
  blueShade2: '#6fadc6',
  blueShade3: '#d1e1e9',
  overlayDark: rgba('#000000', 0.6),
  overlayLight: rgba('#FFFFFF', 0.6),
  shadowDark: rgba('#96aab4', 0.5),
  shadowLight: rgba('#96aab4', 0.9),
};

export const darkTheme = {
  colors: {
    background: colors.darkGray,
    menuBackground: colors.blueShade1,
    footerBackground: colors.gray,
    textDark: colors.blueShade3,
    textMain: colors.blueShade2,
    textSecondary: colors.blueShade3,
    imageOverlay: colors.overlayDark,
    postShadow: colors.shadowDark,
  },
};

export const lightTheme = {
  colors: {
    background: colors.white,
    menuBackground: colors.blueShade3,
    footerBackground: colors.light,
    textDark: colors.blueShade1,
    textMain: colors.blueShade2,
    textSecondary: colors.deepDarkGray,
    imageOverlay: colors.overlayLight,
    postShadow: colors.shadowLight,
  },
};

export const GlobalStyles = (props) => (
  <Global
    {...props}
    styles={css`
      * {
        box-sizing: border-box;
      }
      :root {
        --max-width: 1200px;
      }

      html,
      body {
        margin: 0 auto;
        height: 100%;
        max-width: var(--max-width);
      }

      body {
        background: ${props.theme.colors.background};
        color: ${props.theme.colors.textSecondary};
        font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
          'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1rem;
        font-style: normal;
        margin: 0 auto;
        transition: all 0.5s ease;
        @media (min-width: 600px) {
          padding: 0 20px 80px 20px;
        }
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      main {
        margin: 40px auto;
        max-width: 960px;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${props.theme.colors.textMain};
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
        font-size: 1rem;
        letter-spacing: 1.8px;
        text-transform: uppercase;

        @media (min-width: 600px) {
          font-size: 1.5rem;
        }
      }

      h3 {
        font-size: 0.8rem;
        letter-spacing: 1.5px;
        margin: 30px 0 -15px 0;

        @media (min-width: 600px) {
          font-size: 1.2rem;
        }
      }

      a {
        text-decoration: none;
      }
    `}
  />
);
