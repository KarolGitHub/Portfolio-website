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

export const Tags = styled.div`
  display: none;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  width: 20%;
  h3 {
    :hover {
      opacity: 0.7;
    }
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      margin: 10px;
      color: ${(props) => props.theme.colors.textDark};
    }
  }
  @media (min-width: 600px) {
    display: block;
    margin: 0 auto;
  }
  @media (min-width: 1000px) {
    min-width: 200px;
  }
`;

export const Content = styled.div`
  @media (min-width: 1300px) {
    max-width: calc(var(--max-width) - 1000px);
  }
`;

export const Banner = styled.div`
  display: none;
  @media (min-width: 1000px) {
    padding: 10px;
    text-align: center;
    min-width: 200px;
    margin: 0 auto;
    width: 20%;
    display: block;
  }
`;
