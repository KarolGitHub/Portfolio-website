import React, { Fragment, FunctionComponent } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import homeIcon from '../../../assets/home.svg';
import CV from '../../../assets/CV_KG.pdf';
import {
  Wrapper,
  WelcomeWrapper,
  ButtonFull,
  ButtonOutline,
  ButtonWrapper,
} from './Home.styles';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

const Home: FunctionComponent = () => {
  return (
    <Fragment>
      <Wrapper>
        <WelcomeWrapper>
          <h3>Frontend developer</h3>
          <ButtonWrapper>
            <ButtonFull href={CV} download target="blank" title="CV DOWNLOAD">
              CV DOWNLOAD
            </ButtonFull>
            <ButtonOutline
              title="PROJECTS"
              onClick={() => scrollTo('#Projects')}>
              PROJECTS
            </ButtonOutline>
          </ButtonWrapper>
        </WelcomeWrapper>
        <img src={homeIcon} alt="home" />
      </Wrapper>
      <Skills />
      <Projects />
    </Fragment>
  );
};

export default Home;
