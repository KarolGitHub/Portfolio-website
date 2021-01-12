import styled from '@emotion/styled';
import { buttonStyles, cardStyles, tagStyles } from '../../styles/shared';

export const Wrapper = styled.div`
  ${cardStyles}
  display: block;
  max-width: 800px;
  margin-bottom: 16px;
`;
export const Content = styled.div`
  padding: 12px;

  @media screen and (min-width: 768px) {
    padding: 32px 48px;
  }
`;
export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
  li {
    margin-bottom: 5px;
    a {
      ${tagStyles}
    }
  }
`;
export const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  ul {
    display: flex;
    align-items: center;
    li {
      font-size: 0.875rem;
      margin-right: 10px;
      padding: 5px;
    }
    :first-of-type {
      font-weight: 500;
    }
  }
`;
