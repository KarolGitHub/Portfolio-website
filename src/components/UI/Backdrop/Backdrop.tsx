import React, { FunctionComponent } from 'react';

import { Wrapper } from './Backdrop.styles';

type Props = {
  open: boolean;
  clicked: () => void;
};
const backdrop: FunctionComponent<Props> = ({ open, clicked }) => {
  return open ? <Wrapper onClick={clicked} /> : null;
};

export default backdrop;
