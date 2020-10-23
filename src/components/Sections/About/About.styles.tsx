import styled from '@emotion/styled';

import { cardStyles } from '../../../styles/GlobalStyles';

export const Wrapper = styled.div`
  ${cardStyles}
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background};
  img {
    min-width: 200px;
    width: 30%;
    padding: 10px;
  }
  @media (max-width: 599px) {
    flex-direction: column-reverse;
  }
`;
export const InfoWrapper = styled.div`
  line-height: 2;
  width: 50%;
  text-align: justify;
  @media (max-width: 599px) {
    width: 100%;
  }
`;
