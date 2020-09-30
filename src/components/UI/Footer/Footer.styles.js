import styled from '@emotion/styled';

export const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.footerBackground};
`;
