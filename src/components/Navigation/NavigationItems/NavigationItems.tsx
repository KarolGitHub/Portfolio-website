import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import { Wrapper } from './NavigationItems.styles';

type Props = {
  items: [];
};

const NavigationItems: React.FC<Props> = ({ items }) => (
  <Wrapper>
    {items.map(({ id, name, link }) => (
      <NavigationItem key={id} link={link}>
        {name}
      </NavigationItem>
    ))}
  </Wrapper>
);

export default NavigationItems;
