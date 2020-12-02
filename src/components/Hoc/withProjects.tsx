import React from 'react';
import { useMetaDataQuery } from '../../hooks/useMetaDataQuery';

const withProjects = <P extends object>(Component: React.ComponentType<P>) => (
  props: any
) => {
  const { projects }: MetaData = useMetaDataQuery();
  return <Component {...(props as P)} projects={projects} />;
};

export default withProjects;
