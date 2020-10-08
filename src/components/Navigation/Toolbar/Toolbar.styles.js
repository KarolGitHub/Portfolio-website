import styled from '@emotion/styled';

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
  margin: 0 auto 40px auto;
  background-color: ${(props) => props.theme.colors.menuBackground};
  max-width: 960px;
  height: 60px;
`;
export const Navigation = styled.div`
  display: none;
  width: 100%;
  @media (min-width: 600px) {
    display: flex;
  }
`;

export const Logo = styled.img`
  border-radius: 50%;
  max-width: 55px;
`;
