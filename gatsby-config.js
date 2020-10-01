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
    'gatsby-plugin-emotion',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
  ],
};
