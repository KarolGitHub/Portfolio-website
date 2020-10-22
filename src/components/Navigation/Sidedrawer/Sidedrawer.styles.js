import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  width: 280px;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 450;
  background-color: ${(props) => props.theme.colors.menuBackground};
  padding: 60px 16px;
  transition: transform 0.3s ease-out;
  transform: translate(${(props) => (props.open ? '0' : '-100%')});
  img {
    margin: 10px;
  }
  @media (min-width: 601px) {
    display: none;
    max-width: 70%;
  }
  @media (max-width: 600px) {
    max-width: 70%;
  }
`;
export const Navigation = styled.nav`
  width: 30%;
  li {
    padding: 10px;
  }
`;
