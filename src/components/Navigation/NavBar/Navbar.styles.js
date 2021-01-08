import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Wrapper = styled.div`
  display: flex;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  text-align: center;
  flex-direction: row;
  border-radius: 0 0 20px 20px;
  margin: 0 auto;
  background-color: transparent;
  backdrop-filter: blur(2px);
  transition: all 0.5s ease;
  max-width: calc(var(--max-width) - 1000px);
  height: 70px;
`;
export const Navigation = styled.div`
  display: none;
  width: 100%;
  @media screen and (min-width: 600px) {
    @media screen and (min-height: 361px) {
      display: flex;
    }
  }
`;

export const Logo = styled.img`
  max-width: 60px;
  margin: 5px 10px;
`;
