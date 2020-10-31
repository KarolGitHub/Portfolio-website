import styled from '@emotion/styled';
import { cardStyles, buttonStyles } from '../../../styles/GlobalStyles';

export const Wrapper = styled.div`
  height: 60px;
  align-items: center;
  div {
    width: 100%;
    height: 100%;
    input {
      width: 20em;
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
      @media screen and (max-width: 600px) {
        width: 60%;
      }
    }
    button {
      ${buttonStyles}
      margin-left: 10px;
      border-radius: 5px;
      width: 50px;
      height: 3.25em;
      background-color: ${(props) => props.theme.colors.blue};
      border: 0;
      @media screen and (max-width: 600px) {
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
`;
export const Input = styled.input``;
