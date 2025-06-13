import React from 'react';
import { Wrapper, ProjectWrapper, ButtonOutline, InfoWrapper, ImageWrapper } from './Projects.styles';
import { ButtonWrapper, ButtonFull } from '../Welcome/Welcome.styles';
import withProjects from '../../../Hoc/withProjects';

type Props = {
  projects: Projects[];
};

const Projects: React.FC<Props> = ({ projects }) => {
  const getIcon = (iconName: string) => {
    try {
      return require(`../../../../assets/${iconName}`);
    } catch (error) {
      console.warn(`Icon ${iconName} not found`);
      return null;
    }
  };

  return (
    <Wrapper id="Projects">
      <h3>Projects</h3>
      {projects.map(({ code, demo, name, desc, icon }, i) => (
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
          <ImageWrapper>{icon && <img src={getIcon(icon)} alt={name} />}</ImageWrapper>
        </ProjectWrapper>
      ))}
    </Wrapper>
  );
};

export default withProjects(Projects);
