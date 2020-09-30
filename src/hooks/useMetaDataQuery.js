import { useStaticQuery, graphql } from 'gatsby';

export const useMetaDataQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
          }
        }
      }
    `
  );
  return data.site.siteMetadata;
};
