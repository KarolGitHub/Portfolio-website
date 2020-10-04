module.exports = {
  siteMetadata: {
    title: 'Gatsby-blog',
    description:
      'Blog made with Gatsby, Typescript, Javascript, React hooks, emotion, deployed using Netlify',
    author: 'Karol Gardyjas',
    social: [
      {
        name: 'github',
        url: 'https://github.com/KarolGitHub/Gatsby-blog',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/`,
        },
      },
    }`gatsby-remark-reading-time`,
  ],
};
