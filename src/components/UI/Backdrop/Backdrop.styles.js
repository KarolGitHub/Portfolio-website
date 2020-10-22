import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.backdrop};
`;
