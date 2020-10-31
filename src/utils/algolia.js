const escapeStringRegexp = require('escape-string-regexp');
const pagePath = `content/blog/posts`;
const indexName = `blog`;
const pageQuery = `{
  pages: allMdx(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
      frontmatter: { type: { eq: "post" }, published: { eq: true } }
    }
  ) {
    edges {
      node {
        id
        excerpt(pruneLength: 280)
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          tags
          author
          published
          image {
            childImageSharp {
              fluid(maxWidth: 200, maxHeight: 200) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
        fields {
          slug
          readingTime {
            text
          }
        }
      }
    }
  }
}`;
function pageToAlgoliaRecord({
  node: {
    id,
    frontmatter: { tags, published, ...rest },
    fields,
    ...spread
  },
}) {
  if (published) {
    return {
      objectID: id,
      _tags: tags,
      ...rest,
      ...fields,
      ...spread,
    };
  }
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:280`] },
  },
];
module.exports = queries;
