import styled from '@emotion/styled';

import { buttonStyles, cardStyles } from '../../../../styles/GlobalStyles';

export const Wrapper = styled.div`
  display: grid;
  min-height: 500px;
  width: 100%;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 16px;
  border-radius: 20px;
  background-image: ${(props) => props.theme.colors.heroBackground};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background 0.5s ease;
`;

export const InfoWrapper = styled.div`
  display: grid;
  gap: 10px;
  align-self: center;
  justify-self: center;
  place-items: center;
  text-align: center;
  grid-column: 1 / span 12;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-auto-flow: column;
  margin-top: 10px;
  @media (max-width: 599px) {
    grid-auto-flow: row;
  }
`;
export const ButtonFull = styled.a`
  ${buttonStyles}
  width: 170px;
  height: 60px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.radialBackground};
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
  font: inherit;
  line-height: 58px;
`;
export const ButtonOutline = styled.button`
  ${buttonStyles}
  font: inherit;
  width: 170px;
  height: 60px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.linearBackground};
  border: 1px solid var(--green);
  color: ${(props) => props.theme.colors.textSecondary};
`;
