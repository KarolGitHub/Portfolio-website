import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  margin: 0 auto;
  padding-top: 8px;
  @media screen and (min-width: 768px) {
    padding: 8px;
    grid-template-columns: ${(props) => props.columnsRatio[0]};
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: ${(props) => props.columnsRatio[1]};
  }
  a:hover {
    opacity: 0.7;
  }
`;

export const Tags = styled.div`
  display: none;
  text-align: center;

  a > h3 {
    margin-top: 0;
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
      color: var(--text-dark);
    }
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Content = styled.div``;

export const Banner = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    text-align: center;
  }
`;
