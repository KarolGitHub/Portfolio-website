import styled from '@emotion/styled';

import { cardStyles } from '../../../styles/shared';

export const Wrapper = styled.div`
  ${cardStyles}
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  column-gap: 60px;
  padding: 20px;
  background-color: var(--background);
`;
export const AboutInfoWrapper = styled.div`
  display: flex;
  position: relative;
  max-width: 700px;
  height: min-content;
  align-self: center;
  padding: 10px;
  text-align: justify;
  p {
    padding: 15px 20px;
    margin-bottom: 0;
    @media (min-width: 600px) {
      line-height: 2;
    }
  }
  > img {
    position: absolute;
    width: 60px;
    height: 60px;
    filter: drop-shadow(0px 4px 4px var(--post-shadow))
      drop-shadow(0px 4px 14px var(--post-shadow));
    :first-of-type {
      transform: rotate(-45deg);
      top: 0;
      left: 0;
    }

    :last-of-type {
      transform: rotate(135deg);
      bottom: 0;
      right: 0;
    }
  }
`;
export const ImgWrapper = styled.div`
  min-width: 200px;
  max-width: 300px;
  img {
    width: 100%;
  }
`;
