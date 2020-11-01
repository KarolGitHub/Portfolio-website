import styled from '@emotion/styled';
import { buttonStyles } from '../../../styles/GlobalStyles';

export const Wrapper = styled.div`
  display: flex;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

export const Tags = styled.nav`
  display: none;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
    }
    a {
      margin: 10px;
      color: ${(props) => props.theme.colors.textDark};
    }
  }
  @media (min-width: 600px) {
    display: block;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  width: 100%;
  @media (min-width: 600px) {
    width: 80%;
  }
  @media (min-width: 900px) {
    width: ${(props) => props.width};
  }
`;

export const Banner = styled.div`
  display: none;
  @media (min-width: 900px) {
    max-width: 300px;
    margin: 0 auto;
    display: block;
  }
`;
