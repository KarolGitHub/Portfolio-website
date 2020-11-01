import styled from '@emotion/styled';

export const Wrapper = styled.div`
  h1 {
    padding: 20px;
  }
`;
export const TagCardsWrapper = styled.div`
  display: grid;
  gap: 20px;
  margin: 0 auto;
  padding: 20px;
  max-width: calc(var(--max-width) - 600px);
  h1 {
    margin-bottom: 20px;
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
