import styled from '@emotion/styled';

import { cardStyles } from '../../../../styles/shared';

export const Wrapper = styled.div`
  ${cardStyles}
  display: flex;
  place-content: center;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    p {
      margin: 0 0 10px 0;
    }
    ul {
      display: grid;
      justify-items: center;
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      li {
        width: fit-content;
        img {
          width: 50px;
          height: 50px;
        }
        p {
          font-size: 1rem;
          font-family: Catamaran, sans-serif;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;
