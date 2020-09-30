import React, { FunctionComponent } from 'react';

import { Wrapper } from './Footer.styles';

type Props = {
  author: string;
};

const Footer: FunctionComponent<Props> = ({ author }) => {
  return (
    <Wrapper>
      Site developed by {author}&copy; {new Date().getFullYear().toString()}{' '}
    </Wrapper>
  );
};

export default Footer;
