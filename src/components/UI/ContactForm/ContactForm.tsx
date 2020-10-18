import React, { FunctionComponent } from 'react';
import email from '../../../assets/email.svg';
import github from '../../../assets/github.svg';
import linkedin from '../../../assets/linkedin.svg';
import Obfuscate from 'react-obfuscate';
import { Wrapper } from './ContactForm.styles';
import withSocial from '../../Hoc/withSocial';

type Props = {
  social: Social[];
};

const ContactForm: FunctionComponent<Props> = ({ social }) => {
  const imgList = [email, github, linkedin];
  return (
    <Wrapper>
      Feel free to find me on media listed below:
      {social.map((link, i) => (
        <a key={`${link.name}${i}`}>
          <img src={imgList[i]} alt={link.name} />
          {link.name === 'email' ? (
            <Obfuscate email={link.url} />
          ) : (
            <Obfuscate href={link.url} />
          )}
        </a>
      ))}
    </Wrapper>
  );
};

export default withSocial(ContactForm);
