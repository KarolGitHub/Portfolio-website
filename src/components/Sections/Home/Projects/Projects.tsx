import React from 'react';
import { Wrapper, ProjectWrapper, ButtonOutline, InfoWrapper, ImageWrapper } from './Projects.styles';
import { ButtonWrapper, ButtonFull } from '../Welcome/Welcome.styles';
import withProjects from '../../../Hoc/withProjects';
import bbIcon from '../../../../assets/bb.png';
import spmIcon from '../../../../assets/spm.png';
import ecIcon from '../../../../assets/ecommerce.png';
import pIcon from '../../../../assets/portfolio.png';

type Props = {
  projects: Projects[];
};

const Projects: React.FC<Props> = ({ projects }) => {
  const icons = [bbIcon, spmIcon, ecIcon, pIcon];
  return (
    <Wrapper id="Projects">
      <h3>Projects</h3>
      {projects.map(({ code, demo, name, desc }, i) => (
        <ProjectWrapper key={name + i} id="Projects">
          <InfoWrapper>
            <h4>{name}</h4>
            <p>{desc}</p>
            <ButtonWrapper>
              {demo && (
                <ButtonFull href={demo} target="blank" title="DEMO">
                  DEMO
                </ButtonFull>
              )}
              <ButtonOutline href={code} target="blank" title="CODE">
                CODE
              </ButtonOutline>
            </ButtonWrapper>
          </InfoWrapper>
          <ImageWrapper>
            <img src={icons[i]} alt={name} />
          </ImageWrapper>
        </ProjectWrapper>
      ))}
    </Wrapper>
  );
};

export default withProjects(Projects);
