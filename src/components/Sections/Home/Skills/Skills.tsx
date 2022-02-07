import React from 'react';
import { importAll } from '../../../../utils/utils';
import { Wrapper } from './Skills.styles';

const Skills: React.FC<{}> = () => {
  const skillsIcons: [{ path: string; name: string }] = importAll(
    require.context('../../../../assets/skillsIcons/', false, /\.svg$/)
  );
  const iconsOrder = [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'React.js',
    'Redux',
    'Gatsby',
    'Next.js',
    'Node.js',
    'GIT',
    'Sass',
    'Bootstrap',
    'Firebase',
    'Netlify',
  ];

  const orderedSkillsIcons = iconsOrder.map((name) => skillsIcons.find((skillIcon) => name == skillIcon.name));
  return (
    <Wrapper>
      <div>
        <h3>Skills</h3>
        <p>Technology stack I'm familiar with</p>
        <ul>
          {orderedSkillsIcons.map(
            (skillIcon, i) =>
              skillIcon && (
                <li key={`${skillIcon.name}${i}`}>
                  <img src={skillIcon.path} alt={skillIcon.name} />
                  <p>{skillIcon.name}</p>
                </li>
              )
          )}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Skills;
