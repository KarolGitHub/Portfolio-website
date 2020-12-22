import styled from '@emotion/styled';

import { buttonStyles, cardStyles } from '../../../../styles/shared';

export const Wrapper = styled.div`
  text-align: center;
  ${cardStyles}
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 2px solid var(--post-shadow);
  @media (max-width: 730px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 40%;
  display: flex;
  padding: 10px;
  margin-top: 20px;
  place-content: center;
  img {
    min-width: 200px;
    max-width: 500px;
    border-radius: 15px;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 730px) {
    max-height: 200px;
  }
`;
export const InfoWrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  p {
    text-align: justify;
  }
  @media (max-width: 730px) {
    width: 100%;
  }
`;
export const ButtonOutline = styled.a`
  ${buttonStyles}
  font: inherit;
  width: 170px;
  height: 60px;
  border-radius: 16px;
  background: var(--linear-background);
  border: 1px solid var(--green);
  color: var(--text-secondary);
  text-align: center;
  font: inherit;
  line-height: 55px;
`;
