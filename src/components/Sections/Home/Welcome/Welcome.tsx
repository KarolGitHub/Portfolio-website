import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import {
  Wrapper,
  InfoWrapper,
  ButtonWrapper,
  ButtonFull,
  ButtonOutline,
} from './Welcome.styles';

const Welcome: React.FC<{}> = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <h1>Hello I'm Karol</h1>
        <p>
          I’m a front-end developer mainly using technologies like
          <br />
          React, Gatsby.js and Next.js
        </p>
        <ButtonWrapper>
          <ButtonFull
            href="https://drive.google.com/file/d/198LvS5ql791LBgkhNIWycXBuPDPhI4cn/view"
            target="blank"
            title="CV DOWNLOAD">
            CV DOWNLOAD
          </ButtonFull>
          <ButtonOutline title="PROJECTS" onClick={() => scrollTo('#Projects')}>
            PROJECTS
          </ButtonOutline>
        </ButtonWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

export default Welcome;
