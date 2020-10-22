import React, { FunctionComponent } from 'react';
import { importAll } from '../../../../utils/utils';
import { Wrapper} from './Skills.styles';

const Skills: FunctionComponent = () => {
  const skillsIcons: [{ path: string; name: string }] = importAll(
    require.context('../../../../assets/skillsIcons/', false, /\.svg$/)
  );
  return (
    <Wrapper>
      <div>
        <h3>Skills</h3>
        <p>Technology stack I'm familliar with</p>
        <ul>
          {skillsIcons.map(({ name, path }, i) => (
            <li key={name + i}>
              <img src={path} alt={name} />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Skills;
