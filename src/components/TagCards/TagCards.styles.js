import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 0px 20px;
  margin: 0 auto;
`;
export const TagCardsWrapper = styled.div`
  display: grid;
  gap: 20px;
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1300px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
