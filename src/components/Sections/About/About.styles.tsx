import styled from '@emotion/styled';

import { cardStyles } from '../../../styles/GlobalStyles';

export const Wrapper = styled.div`
  ${cardStyles}
  display: flex;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.background};
  img {
    min-width: 200px;
    width: 30%;
    padding: 10px;
  }
  @media (max-width: 599px) {
    flex-direction: column;
  }
`;
