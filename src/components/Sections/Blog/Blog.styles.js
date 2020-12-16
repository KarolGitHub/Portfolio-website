import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  a:hover {
    opacity: 0.7;
  }
`;

export const Tags = styled.div`
  display: none;
  text-align: center;
  margin: 0 auto;
  padding: 0px 10px;
  width: 20%;
  a > h3:hover {
    opacity: 0.7;
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
  width: 100%;
  @media (min-width: 600px) {
    width: ${(props) => props.width[0]};
  }
  @media (min-width: 1000px) {
    width: ${(props) => props.width[1]};
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
