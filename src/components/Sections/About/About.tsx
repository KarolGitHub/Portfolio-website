import React from 'react';
import aboutIcon from '../../../assets/about.svg';
import arrowBorderIcon from '../../../assets/arrow-border.svg';

import { Wrapper, AboutInfoWrapper, ImgWrapper } from './About.styles';

const About: React.FC<{}> = () => {
  return (
    <Wrapper>
      <AboutInfoWrapper>
        <img src={arrowBorderIcon} alt="arrow" />
        <p>
          I'm a passionate front-end developer graduated in Rzeszów University
          of Technology. For a few years I have been developing myself towards
          chosen career path. Right now I am building my portfolio through
          creating new projects as well as improving existing ones coding witch
          technologies like <strong>React, Gatsby.js and Next.js</strong>. Thank
          you for visiting my portfolio page, I hope you will have fun.
        </p>
        <img src={arrowBorderIcon} alt="arrow" />
      </AboutInfoWrapper>
      <ImgWrapper>
        <img src={aboutIcon} alt="about" />
      </ImgWrapper>
    </Wrapper>
  );
};

export default About;
