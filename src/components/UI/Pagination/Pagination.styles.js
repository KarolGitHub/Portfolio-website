import styled from '@emotion/styled';
import { buttonStyles } from '../../../styles/shared';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 40px;
  font-size: 1.5rem;
`;

export const Wrapper = styled.div`
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
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const PagesWrapper = styled.div`
  width: 100%;
  display: none;
  place-content: center;
  a {
    padding: 10px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
