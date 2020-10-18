import styled from '@emotion/styled';

import { cardStyles } from '../../../styles/GlobalStyles';

export const Wrapper = styled.div`
  ${cardStyles}
  display:grid;
  gap: 10px;
  padding: 10px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  a {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  }
`;
