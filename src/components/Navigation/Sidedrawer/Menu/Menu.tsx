import React, { FunctionComponent } from 'react';

import { Wrapper } from './Menu.styles';

type Props = {
  clicked: () => void;
};

const Menu: FunctionComponent<Props> = ({ clicked }) => (
  <Wrapper onClick={clicked}>
    <div></div>
    <div></div>
    <div></div>
  </Wrapper>
);

export default Menu;
