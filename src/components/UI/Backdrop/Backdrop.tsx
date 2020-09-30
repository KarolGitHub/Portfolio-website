import React, { FunctionComponent } from 'react';

import { Wrapper } from './Backdrop.styles';

type Props = {
  open: boolean;
  clicked: () => void;
};
const backdrop: FunctionComponent<Props> = ({ open, clicked }) =>
  open ? <Wrapper {...{open}} onClick={clicked}></Wrapper> : null;

export default backdrop;
