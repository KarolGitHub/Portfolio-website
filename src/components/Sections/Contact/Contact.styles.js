import styled from '@emotion/styled';
import { buttonStyles, cardStyles } from '../../../styles/GlobalStyles';
import contactIcon from '../../../assets/contact.svg';

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 700px;
  height: min-content;
  align-self: center;
  padding: 10px;
  text-align: justify;
  padding: 25px 30px;
  p {
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
export const ContactLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
  a {
    ${buttonStyles}
    display: flex;
    border-radius: 10px;
    padding: 5px;
    margin: 5px 0px;
    background: var(--yellow-gradient);
    align-items: center;
    text-align: center;
    font: inherit;
    &,
    :visited {
      color: var(--blue);
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
