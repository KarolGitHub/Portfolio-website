import styled from '@emotion/styled';
import { cardStyles, buttonStyles } from '../../../styles/shared';

export const Wrapper = styled.div`
  height: 60px;
  align-items: flex-start;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  div {
    width: 100%;
    form {
      display: flex;

      width: 100%;
      input {
        width: 400px;
        padding: 10px;
        border-radius: 20px;
        color: var(--text-secondary);
        background-color: var(--search-background);
        border: 1px solid var(--search-background);
        transition: all 0.5s ease;
        font: inherit;
        font-weight: inherit;
        :focus {
          border: 1px solid var(--post-shadow);
        }
        @media screen and (max-width: 767px) {
          width: 60%;
        }
      }
      button {
        ${buttonStyles}
        margin-left: 10px;
        border-radius: 10px;
        width: 50px;
        height: 50px;
        background-color: var(--blue);
        border: 0;
        @media screen and (max-width: 767px) {
          :last-of-type {
            display: none;
          }
        }

        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
    @media screen and (max-width: 767px) {
      width: 60%;
    }
  }
`;
export const LinkWrapper = styled.div`
  width: 50px !important;
  margin-right: 20px;
  a {
    display: block;
    font: inherit;
    border-radius: 10px;
    width: 60px;
    height: 50px;
    margin-right: 10px;
    background-color: var(--background);
    border: 1px solid var(--blue);
    color: var(--light-blue);
    text-align: center;
    line-height: 50px;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
