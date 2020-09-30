import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  width: 100%;
  display: block;
  list-style-type: none;
  padding: 0;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textDark};
  }

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

    :hover {
      opacity: 0.7;
    }
  }
`;
