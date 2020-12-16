import styled from '@emotion/styled';

import { cardStyles } from '../../../../styles/GlobalStyles';

export const Wrapper = styled.div`
  ${cardStyles}
  display: flex;
  margin: 40px 0;
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
      grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
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
