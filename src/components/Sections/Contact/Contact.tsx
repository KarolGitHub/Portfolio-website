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
          {social.map(({ name, url }, i) =>
            name === 'email' ? (
              <Obfuscate
                key={`${name}${i}`}
                email={url}
                obfuscateChildren={false}
                linkText="email">
                <img src={iconList[i]} alt={name} />
                {url}
              </Obfuscate>
            ) : (
              <a key={`${name}${i}`} href={url} target="_blank">
                <img src={iconList[i]} alt={name} />
                {name}
              </a>
            )
          )}
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
