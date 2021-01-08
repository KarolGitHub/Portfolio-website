import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  width: 280px;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 450;
  background-color: var(--sidedrawer-background);
  padding: 60px 16px;
  transition: transform 0.3s ease-out;
  transform: translate(${(props) => (props.open ? '0' : '-100%')});

  @media screen and (min-width: 601px) {
    @media screen and (min-height: 361px) {
      display: none;
      max-width: 70%;
    }
  }
  @media screen and (max-width: 600px) {
    max-width: 70%;
  }
`;
export const Navigation = styled.nav`
  width: 30%;
  li {
    padding: 10px 0px;
  }
`;

export const Logo = styled.img`
  max-width: 60px;
  @media screen and (max-height: 360px) {
    display: none;
  }
`;
