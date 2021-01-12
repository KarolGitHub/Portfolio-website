import styled from '@emotion/styled';
import { buttonStyles, cardStyles, tagStyles } from '../../styles/shared';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: 0.5s ease;
  z-index: 0;
  border-radius: 10px;
  background-color: var(--image-overlay);
`;

export const Wrapper = styled.div`
  display: flex;
  ${cardStyles}
  margin-bottom: 20px;
  :hover ${Overlay} {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: none;
  width: 30%;
  height: min-content;
  z-index: -1;
  img {
    border-radius: 10px;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const MetaData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px 10px 10px;
  line-height: 1.2;
  z-index: 0;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;

export const DetailsWrapper = styled.ul`
  position: absolute;
  bottom: 0;
  top: 50%;
  left: 50%;
  margin: auto;
  padding: 0;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  white-space: nowrap;
  z-index: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  ul {
    display: flex;
    width: 100%;
    margin: auto;
    align-items: center;
    text-align: center;
    li {
      font-size: 0.75rem;
      margin-left: 5px;
      @media screen and (min-width: 1024px) {
        font-size: 0.875rem;
      }
    }
    :first-of-type {
      font-weight: 500;
    }
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1rem;
  line-height: 1.5rem;
  z-index: 0;
  div {
    display: flex;
    flex-direction: row;
    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      text-align: center;
      li {
        margin-bottom: 10px;
        a {
          ${tagStyles}
        }
      }
    }
    a:visited {
      color: var(--blue);
    }
    > img {
      align-self: flex-start;
      width: min-content;
      margin-right: 5px;
    }
  }
`;

export const PostLinkWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  margin-left: 5px;
  border-bottom: 1px solid var(--blue);
  a {
    display: flex;
  }
`;
