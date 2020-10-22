import React, { FunctionComponent } from 'react';
import aboutIcon from '../../../assets/about.svg';
import { Wrapper } from './About.styles';

const About: FunctionComponent = () => {
  return (
    <Wrapper>
      <img src={aboutIcon} alt="about" />
      Hi I am Karol, currently graduate of Rzeszów University of Technology, in
      the future frontend developer. For a few years I have been developing
      myself towards chosen career path. Right now I am building my portfolio
      through creating new projects as well as improving existing ones. Thank
      you for visiting my portfolio page, I hope you will have fun.
    </Wrapper>
  );
};

export default About;
