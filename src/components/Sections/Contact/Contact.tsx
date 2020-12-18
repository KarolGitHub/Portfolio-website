import React from 'react';
import Obfuscate from 'react-obfuscate';

import emailIcon from '../../../assets/email.svg';
import githubIcon from '../../../assets/github.svg';
import linkedinIcon from '../../../assets/linkedin.svg';
import contactIcon from '../../../assets/contact.svg';
import arrowBorderIcon from '../../../assets/arrow-border.svg';
import { Wrapper } from '../About/About.styles';
import {
  ContactInfoWrapper,
  ContactLinksWrapper,
  ContactLink,
  ImgWrapper,
} from './Contact.styles';
import withSocial from '../../Hoc/withSocial';

type Props = {
  social: Social[];
};

const Contact: React.FC<Props> = ({ social }) => {
  const iconList = [emailIcon, githubIcon, linkedinIcon];
  return (
    <Wrapper>
      <ContactInfoWrapper>
        <img src={arrowBorderIcon} alt="arrow" />
        <p>
          If you have any job offers or simply want to talk, <br />
          feel free to find me on media listed below:
        </p>
        <ContactLinksWrapper>
          {social.map(({ name, url }, i) => (
            <ContactLink key={`${name}${i}`}>
              <img src={iconList[i]} alt={name} />
              {name === 'email' ? (
                <Obfuscate email={url} />
              ) : (
                <a href={url} target="_blank">
                  {name}
                </a>
              )}
            </ContactLink>
          ))}
        </ContactLinksWrapper>
        <img src={arrowBorderIcon} alt="arrow" />
      </ContactInfoWrapper>
      <ImgWrapper>
        <img src={contactIcon} alt="contact" />
      </ImgWrapper>
    </Wrapper>
  );
};

export default withSocial(Contact);
