import styled from '@emotion/styled';

import { buttonStyles, cardStyles } from '../../../styles/GlobalStyles';

export const Wrapper = styled.div`
  ${cardStyles}
  display: flex;
  margin: 40px 0;
  padding: 10px;
  img {
    min-width: 200px;
    width: 40%;
    padding: 10px;
    @media (max-width: 599px) {
      display: none;
    }
  }
`;
export const WelcomeWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  max-width: 350px;
  display: grid;
  gap: 10px;
  grid-auto-flow: column;
  @media (max-width: 599px) {
    grid-auto-flow: row;
  }
`;
export const ButtonFull = styled.a`
  ${buttonStyles}
  width: 150px;
  height: 60px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
  font: inherit;
  line-height: 55px;
`;
export const ButtonOutline = styled.button`
  ${buttonStyles}
  font: inherit;
  width: 150px;
  height: 60px;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.textSecondary};
  border-radius: 10px;
`;
