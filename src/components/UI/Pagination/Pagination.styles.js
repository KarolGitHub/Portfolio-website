import styled from '@emotion/styled';
import { buttonStyles } from '../../../styles/GlobalStyles';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 40px;
  font-size: 1.5rem;
  div {
    display: flex;
    justify-content: space-between;
    width: 90px;
    a {
      width: 40px;
      height: 40px;
      border-radius: 30px;
      input {
        ${buttonStyles}
        border-radius: 30px;
      }
    }
  }
`;
