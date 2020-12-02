import React from 'react';
import { useSiteConfigQuery } from '../../hooks/useSiteConfigQuery';

const withConfig = <P extends object>(Component: React.ComponentType<P>) => (
  props: any
) => {
  const {
    logo: { publicURL },
    menu,
  } = useSiteConfigQuery();
  return <Component {...(props as P)} logo={publicURL} menu={menu} />;
};

export default withConfig;
