import React, { FunctionComponent } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import { Wrapper} from './NavigationItems.styles';

const NavigationItems: FunctionComponent = () => (
    <Wrapper>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/blog">Blog</NavigationItem>
      <NavigationItem link="/contact">Contact</NavigationItem>
      <NavigationItem link="/about">About</NavigationItem>
    </Wrapper>
);

export default NavigationItems;
