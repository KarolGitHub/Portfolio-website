import React from 'react';
import { useMetaDataQuery } from '../../hooks/useMetaDataQuery';

const withProjects = (Component: any) => (props: any) => {
  const { projects }: MetaData = useMetaDataQuery();
  return <Component {...props} projects={projects} />;
};

export default withProjects;
