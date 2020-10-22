import styled from '@emotion/styled';

import { buttonStyles, cardStyles } from '../../../../styles/GlobalStyles';

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
  border-bottom: 2px solid ${(props) => props.theme.colors.postShadow};
  img {
    border-radius: 15px;
    width: 330px;
    padding: 10px;
  }
  @media (max-width: 730px) {
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 60%;
  display: flex;
  flex-direction: column;
  p {
    text-align: justify;
  }
`;
export const ButtonOutline = styled.a`
  ${buttonStyles}
  font: inherit;
  width: 150px;
  height: 60px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
  font: inherit;
  line-height: 55px;
`;
