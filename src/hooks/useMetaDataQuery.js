import { useStaticQuery, graphql } from 'gatsby';

export const useMetaDataQuery = () => {
  const data = useStaticQuery(graphql`
    query MetaDataQuery {
      site {
        siteMetadata {
          author
          description
          title
          social {
            name
            url
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
