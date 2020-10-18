import React from 'react';
import { useMetaDataQuery } from '../../hooks/useMetaDataQuery';

const withSocial = (Component: any) => (props: any) => {
  const { social }: MetaData = useMetaDataQuery();
  return <Component {...props} social={social} />;
};

export default withSocial;
