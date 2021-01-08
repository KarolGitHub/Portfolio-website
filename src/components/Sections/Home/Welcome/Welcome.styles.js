import styled from '@emotion/styled';
import welcomeBg from '../../../../assets/welcome-bg.png';
import { buttonStyles, cardStyles } from '../../../../styles/shared';

export const Wrapper = styled.div`
  display: grid;
  min-height: 500px;
  width: 100%;
  position: relative;
  top: -70px;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 16px;
  border-radius: 0 0 20px 20px;
  background-image: url(${welcomeBg});
  background-color: var(--hero-background);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.5s ease;
  background-blend-mode: screen;
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
  @media screen and (max-width: 599px) {
    grid-auto-flow: row;
  }
`;
export const ButtonFull = styled.a`
  ${buttonStyles}
  width: 170px;
  height: 60px;
  border-radius: 16px;
  background: var(--radial-background);
  color: var(--text-secondary);
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
  background: var(--linear-background);
  border: 1px solid var(--green);
  color: var(--text-secondary);
`;
