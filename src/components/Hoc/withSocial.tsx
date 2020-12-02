import React from 'react';
import { useMetaDataQuery } from '../../hooks/useMetaDataQuery';

const withSocial = <P extends object>(Component: React.ComponentType<P>) => (
  props: any
) => {
  const { social }: MetaData = useMetaDataQuery();
  return <Component {...(props as P)} social={social} />;
};

export default withSocial;
