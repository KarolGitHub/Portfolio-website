import React from 'react';
import { useSiteConfigQuery } from '../../hooks/useSiteConfigQuery';

const withConfig = (Component: any) => (props: any) => {
  const {
    logo: { publicURL },
    menu,
  } = useSiteConfigQuery();
  return <Component {...props} logo={publicURL} menu={menu} />;
};

export default withConfig;
