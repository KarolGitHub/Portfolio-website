import styled from '@emotion/styled';

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 0 0 15px 15px;
  margin: 0 auto 40px auto;
  background-color: var(--menu-background);
  transition: all 0.5s ease;
  max-width: calc(var(--max-width) - 1000px);
  height: 70px;
`;
export const Navigation = styled.div`
  display: none;
  width: 100%;
  @media (min-width: 600px) {
    display: flex;
  }
`;

export const Logo = styled.img`
  max-width: 60px;
  margin: 5px 10px;
`;
