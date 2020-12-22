import React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalStyles = (
  <Global
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
        --linear-background: linear-gradient(270deg, #fafafa 0%, #e7e7e7 100%);
        --radial-background: radial-gradient(circle, #4cff50 50%, #0fad4a 100%);
        --hero-background: rgba(240, 248, 255, 0.8);
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
        --linear-background: linear-gradient(270deg, #1a1c20 0%, #343a40 100%);
        --radial-background: radial-gradient(circle, #0fad4a 50%, #4cff50 100%);
        --hero-background: rgba(0, 0, 0, 0.5);
      }

      html,
      body {
        :root {
          --max-width: 2300px;
          --light-blue: #6fadc6;
          --blue: #0077b7;
          --green: #4cff50;
          --red: #f93f3f;
          --backdrop: rgba(0, 0, 0, 0.5);
          --yellow-gradient: linear-gradient(270deg, #ffd700 0%, #f5f94d 100%);
        }
      }

      body {
        background: var(--background);
        color: var(--text-secondary);
        font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
          'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', Catamaran, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1.25rem;
        font-style: normal;
        transition: var(--transition-theme);
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
);

export const cardStyles = () => css`
  padding: 0;
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0 7px 30px -10px var(--post-shadow);
  -moz-box-shadow: 0 7px 30px -10px var(--post-shadow);
  box-shadow: 0 7px 30px -10px var(--post-shadow);
`;

export const buttonStyles = () => css`
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.5s ease, box-shadow 0.3s ease,
    transform 0.3s ease;
  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  :hover:not([disabled]),
  :active:not([disabled]) {
    -moz-box-shadow: 0 0 10px #ccc;
    -webkit-box-shadow: 0 0 10px #ccc;
    box-shadow: 0 0 10px #ccc;
  }
  :hover:not([disabled]) {
    transform: scale(1.1);
  }
  :active:not([disabled]) {
    transform: scale(0.9);
  }
`;
