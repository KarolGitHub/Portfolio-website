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
  .Logo {
    height: 10%;
    width: 10%;
    margin-bottom: 32px;
  }
`;
export const Nav = styled.nav`
  width: 30%;
`;
