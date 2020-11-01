import styled from '@emotion/styled';

import { cardStyles } from '../../../styles/GlobalStyles';

export const Wrapper = styled.div`
  ${cardStyles}
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  div {
    a {
      h3 {
        :hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
