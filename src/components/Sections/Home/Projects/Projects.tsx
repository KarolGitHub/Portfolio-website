import React, { FunctionComponent } from 'react';
import {
  Wrapper,
  ProjectWrapper,
  ButtonOutline,
  InfoWrapper,
} from './Projects.styles';
import { ButtonWrapper, ButtonFull } from '../Home.styles';
import withProjects from '../../../Hoc/withProjects';
import bbIcon from '../../../../assets/bb.png';
import spmIcon from '../../../../assets/spm.png';
type Props = {
  projects: Projects[];
};

const Projects: FunctionComponent<Props> = ({ projects }) => {
  const icons = [bbIcon, spmIcon];
  return (
    <Wrapper id="Projects">
      <div>
        <h3>Projects</h3>
        {projects.map(({ code, demo, name, desc, image }, i) => (
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
            {image && <img src={icons[i]} alt={name} />}
          </ProjectWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default withProjects(Projects);
