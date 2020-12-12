import styled from '@emotion/styled';
import { cardStyles, buttonStyles } from '../../../styles/GlobalStyles';

export const Wrapper = styled.div`
  height: 60px;
  align-items: center;
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
        background-color: ${(props) => props.theme.colors.searchBackground};
        border: 1px solid ${(props) => props.theme.colors.searchBackground};
        font: inherit;
        font-weight: inherit;
        color: ${(props) => props.theme.colors.textSecondary};
        :focus {
          border: 1px solid ${(props) => props.theme.colors.postShadow};
        }
        @media screen and (max-width: 599px) {
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
        @media screen and (max-width: 599px) {
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
    @media screen and (max-width: 599px) {
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
    background-color: ${(props) => props.theme.colors.background};
    border: 1px solid var(--blue);
    color: var(--light-blue);
    text-align: center;
    line-height: 50px;
    @media (min-width: 600px) {
      display: none;
    }
  }
`;
