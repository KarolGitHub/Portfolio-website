import styled from '@emotion/styled';

import { cardStyles } from '../../../styles/shared';

export const Wrapper = styled.div`
  ${cardStyles}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  min-height: 150px;
  border-radius: 10px;
  border-top: 1rem solid ${(props) => props.bgColor};
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
