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
    filter: drop-shadow(0px 4px 4px ${(props) => props.theme.colors.postShadow})
      drop-shadow(0px 4px 14px ${(props) => props.theme.colors.postShadow});
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
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

export const ContactLink = styled.div`
  ${buttonStyles}
  display: flex;
  border-radius: 10px;
  padding: 5px;
  margin: 5px 0px;
  background: var(--yellow-gradient);
  align-items: center;
  text-align: center;
  font: inherit;
  a,
  a:visited {
    color: var(--blue);
  }
`;

export const ImgWrapper = styled.div`
  min-width: 200px;
  max-width: 300px;
  img {
    width: 100%;
  }
`;
