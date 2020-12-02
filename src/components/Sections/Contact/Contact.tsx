import React from 'react';
import email from '../../../assets/email.svg';
import github from '../../../assets/github.svg';
import linkedin from '../../../assets/linkedin.svg';
import Obfuscate from 'react-obfuscate';
import { Wrapper } from './Contact.styles';
import withSocial from '../../Hoc/withSocial';

type Props = {
  social: Social[];
};

const Contact: React.FC<Props> = ({ social }) => {
  const imgList = [email, github, linkedin];
  return (
    <Wrapper>
      Feel free to find me on media listed below:
      {social.map(({ name, url }, i) => (
        <div key={`${name}${i}`}>
          <img src={imgList[i]} alt={name} />
          {name === 'email' ? (
            <Obfuscate email={url} />
          ) : (
            <Obfuscate href={url} target="blank" />
          )}
        </div>
      ))}
    </Wrapper>
  );
};

export default withSocial(Contact);
