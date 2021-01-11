import React from 'react';

import { Wrapper } from './Footer.styles';

type Props = {
  author: string;
};

const Footer: React.FC<Props> = ({ author }) => {
  return (
    <Wrapper>
      Site developed by {author} &copy; {new Date().getFullYear().toString()}{' '}
    </Wrapper>
  );
};

export default Footer;
