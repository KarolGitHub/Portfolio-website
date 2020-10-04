import React, { FunctionComponent } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import { Wrapper } from './NavigationItems.styles';

type Props = {
  items: [];
};

const NavigationItems: FunctionComponent<Props> = ({ items }) => (
  <Wrapper>
    {items.map((item: any) => (
      <NavigationItem key={item.id} link={item.link}>
        {item.name}
      </NavigationItem>
    ))}
  </Wrapper>
);

export default NavigationItems;
