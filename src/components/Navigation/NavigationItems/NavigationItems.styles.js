import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  width: 100%;
  display: block;
  margin: auto 0;
  li {
    display: inline-block;
    cursor: pointer;

    .active {
      font-weight: 800;

      :after {
        display: block;
        content: '';
        transform: scaleX(1);
        border-bottom: 4px solid var(--red);
        transition: transform 100ms ease-out;
      }

      :hover:after {
        transform: scaleX(1.4);
      }
    }

    a {
      display: block;
      padding: 5px 10px;
      margin: 0px 5px;
      border-radius: 5px;
      background: transparent;
      transition: background 0.3s ease;
      color: ${(props) => props.theme.colors.textDark};

      :hover {
        background: ${(props) => props.theme.colors.postShadow};
      }

      :first-of-type {
        padding-right: 15px;
      }

      :last-of-type {
        padding-left: 15px;
      }
    }
  }
`;
