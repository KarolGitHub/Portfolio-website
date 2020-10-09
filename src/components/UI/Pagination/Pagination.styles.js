import styled from '@emotion/styled';

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
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 30px;
        :disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        :hover:not([disabled]) {
          -moz-box-shadow: 0 0 10px #ccc;
          -webkit-box-shadow: 0 0 10px #ccc;
          box-shadow: 0 0 10px #ccc;
        }
      }
    }
  }
`;
