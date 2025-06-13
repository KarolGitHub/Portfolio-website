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
          projects {
            name
            code
            demo
            desc
            icon
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
