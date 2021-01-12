import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 0px 10px;
  h1 {
    margin: 0px 0px 10px 0px;
  }
`;
export const TagCardsWrapper = styled.div`
  display: grid;
  gap: 20px;
  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
