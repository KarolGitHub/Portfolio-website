import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  margin-left: 10px;
  cursor: pointer;
  @media (min-width: 600px) {
    @media (min-height: 361px) {
      display: none;
    }
  }
  div {
    width: 90%;
    height: 3px;
    background-color: var(--text-dark);
  }
`;
