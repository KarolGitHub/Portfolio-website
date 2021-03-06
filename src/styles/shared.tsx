import { css } from '@emotion/core';

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
    -moz-box-shadow: 0 0 10px var(--text-dark);
    -webkit-box-shadow: 0 0 10px var(--text-dark);
    box-shadow: 0 0 10px var(--text-dark);
  }
  :hover:not([disabled]) {
    transform: scale(1.1);
  }
  :active:not([disabled]) {
    transform: scale(0.9);
  }
`;

export const tagStyles = () => css`
  padding: 5px;
  border-radius: 10px;
  margin-right: 5px;
  -webkit-box-shadow: 0 0 0 var(--post-shadow),
    inset 0 7px 30px -10px var(--post-shadow);
  -moz-box-shadow: 0 0 0 var(--post-shadow),
    inset 0 7px 30px -10px var(--post-shadow);
  box-shadow: 0 0 0 var(--post-shadow),
    inset 0 7px 30px -10px var(--post-shadow);
  font-size: 0.875rem;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  :hover {
    -webkit-box-shadow: 0 0 10px var(--text-dark),
      inset 0 7px 30px -10px var(--post-shadow);
    -moz-box-shadow: 0 0 10px var(--text-dark),
      inset 0 7px 30px -10px var(--post-shadow);
    box-shadow: 0 0 10px var(--text-dark),
      inset 0 7px 30px -10px var(--post-shadow);
  }
  &,
  :visited {
    color: var(--blue);
  }
`;
