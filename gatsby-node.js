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
        filter: { frontmatter: { type: { in: ["page", "home"] } } }
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
  allPosts.forEach(({ node }) => {
    if (node.frontmatter.published) {
      createPage({
        path: `${node.fields.slug}`,
        component: path.resolve(`./src/components/templates/Post.js`),
        // You can use the values in this context in
        // our page layout component
        context: { id: node.id },
      });
    }
  });

  // Create pages
  allPages.forEach(({ node }) => {
    let componentPath;
    if (node.frontmatter.type === 'home') {
      componentPath = `./src/components/templates/Home.js`;
    } else {
      componentPath = `./src/components/templates/Page.js`;
    }
    createPage({
      path: node.fields.slug,
      component: path.resolve(componentPath),
      context: { id: node.id },
    });
  });

  //Posts in Blog page
  const limit = 5;
  const totalPages = Math.ceil(allPosts.length / limit);
  Array.from({ length: totalPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `blog` : `blog/${i + 1}`,
      component: path.resolve(`./src/components/templates/Blog.js`),
      context: {
        limit: limit,
        skip: i * limit,
        totalPages,
        currentPage: i + 1,
      },
    });
  });

  // Create tag pages
  const tagCount = {};
  allPosts.forEach(
    ({
      node: {
        frontmatter: { tags },
      },
    }) => {
      tags.forEach((tag) => {
        if (tagCount[tag]) {
          tagCount[tag]++;
        } else {
          tagCount[tag] = 1;
        }
      });
    }
  );

  const tagPages = {};
  for (tag in tagCount) {
    tagPages[tag] = Math.ceil(tagCount[tag] / limit);
  }
  allTags.forEach((tag) => {
    const tagValue = tag.fieldValue;
    const totalTagPages = tagPages[tagValue];
    for (let j = 1; j <= totalTagPages; j++) {
      createPage({
        path:
          j === 1
            ? `blog/t/${_.kebabCase(tagValue)}/`
            : `blog/t/${_.kebabCase(tagValue)}/${j}`,
        component: path.resolve(`./src/components/templates/Tags.js`),
        context: {
          tag: tagValue,
          limit: limit,
          skip: (j - 1) * limit,
          totalPages: totalTagPages,
          currentPage: j,
        },
      });
    }
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
