const path = require('path');
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
      posts: allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
            id
            frontmatter {
              published
            }
            fields {
              slug
            }
          }
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
  const blogPages = Math.ceil(allPosts.length / limit);
  Array.from({ length: blogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `blog` : `blog/${i + 1}`,
      component: path.resolve(`./src/components/templates/Blog.js`),
      context: { limit: limit, skip: i * limit, blogPages, currentPage: i + 1 },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          '@mdx-js/mdx': path.resolve('./node_modules/@mdx-js/mdx'),
          'react-dom': '@hot-loader/react-dom',
          emotion: path.resolve('./node_modules/emotion'),
        },
      },
    });
  }
};
