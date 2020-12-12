import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  width: 100%;
  display: block;
  padding: 0;

  li {
    padding: 3px;
    display: inline-block;
    margin-right: 20px;
    transition: opacity 0.5s ease;
    cursor: pointer;

    .active {
      font-weight: 800;
    }

    :last-child {
      margin-right: 0;
    }

    a {
      color: ${(props) => props.theme.colors.textDark};
    }
  }
`;
