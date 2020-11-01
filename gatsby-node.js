const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

// First create the slug for posts and pages
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx' || node.parentNode === 'File') {
    const value = createFilePath({ node, getNode });
    if (value === '/home/') {
      createNodeField({
        name: 'slug',
        node,
        value: `/`,
      });
    } else {
      createNodeField({
        name: 'slug',
        node,
        value: `${value}`,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      posts: allMdx(
        filter: { frontmatter: { type: { eq: "post" } } }
        limit: 2000
      ) {
        edges {
          node {
            id
            frontmatter {
              published
              tags
            }
            fields {
              slug
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }

      pages: allMdx(
        filter: { frontmatter: { type: { in: ["page", "home", "blog"] } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              type
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const allPosts = result.data.posts.edges;
  const allPages = result.data.pages.edges;
  const allTags = result.data.tagsGroup.group;

  // Create posts
  allPosts.forEach(
    ({
      node: {
        id,
        fields: { slug },
        frontmatter: { published },
      },
    }) => {
      if (published) {
        createPage({
          path: `${slug}`,
          component: path.resolve(`./src/components/templates/PostTemplate.js`),
          context: { id: id },
        });
      }
    }
  );

  const tags = allTags
    .map((tag) => ({
      value: tag.fieldValue,
      path: `/blog/t/${_.kebabCase(tag.fieldValue)}/`,
      count: tag.totalCount,
    }))
    .sort((a, b) => b.count - a.count);

  // Create pages
  allPages.forEach(
    ({
      node: {
        id,
        frontmatter: { type },
        fields: { slug },
      },
    }) => {
      switch (type) {
        case 'blog':
          createPage({
            path: slug,
            component: path.resolve(
              `./src/components/templates/BlogTemplate.js`
            ),
            context: { id: id, tags },
          });
          break;
        case 'home':
          createPage({
            path: slug,
            component: path.resolve(
              `./src/components/templates/HomeTemplate.js`
            ),
            context: { id: id },
          });
          break;
        default:
          createPage({
            path: slug,
            component: path.resolve(
              `./src/components/templates/PageTemplate.js`
            ),
            context: { id: id },
          });
      }
    }
  );

  // Create tag pages
  tags.forEach((tag) => {
    createPage({
      path: tag.path,
      component: path.resolve(`./src/components/templates/TagTemplate.js`),
      context: {
        id: tag.value,
        tags,
      },
    });
  });

  createPage({
    path: `/blog/tags/`,
    component: path.resolve(`./src/components/templates/TagsTemplate.js`),
    context: {
      id: 'tags',
      tags,
    },
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
          '@mdx-js/mdx': path.resolve('./node_modules/@mdx-js/mdx'),
          'react-dom': '@hot-loader/react-dom',
          emotion: path.resolve('./node_modules/emotion'),
        },
      },
    });
  }
};
