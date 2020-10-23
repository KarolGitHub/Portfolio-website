import React, { FunctionComponent } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import welcomeIcon from '../../../../assets/welcome.svg';
import CV from '../../../../assets/CV_KG.pdf';
import {
  Wrapper,
  InfoWrapper,
  ButtonFull,
  ButtonOutline,
  ButtonWrapper,
} from './Welcome.styles';

const Welcome: FunctionComponent = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <h3>Frontend developer</h3>
        <ButtonWrapper>
          <ButtonFull href={CV} download target="blank" title="CV DOWNLOAD">
            CV DOWNLOAD
          </ButtonFull>
          <ButtonOutline title="PROJECTS" onClick={() => scrollTo('#Projects')}>
            PROJECTS
          </ButtonOutline>
        </ButtonWrapper>
      </InfoWrapper>
      <img src={welcomeIcon} alt="home" />
    </Wrapper>
  );
};

export default Welcome;
