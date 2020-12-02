import React from 'react';

import { Wrapper } from './Menu.styles';

type Props = {
  clicked: () => void;
};

const Menu: React.FC<Props> = ({ clicked }) => (
  <Wrapper onClick={clicked}>
    <div></div>
    <div></div>
    <div></div>
  </Wrapper>
);

export default Menu;
