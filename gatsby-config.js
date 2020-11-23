require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Gatsby-blog',
    description:
      'Blog made with Gatsby, Typescript, Javascript, React hooks, emotion, deployed using Netlify',
    author: 'Karol Gardyjas',
    social: [
      {
        name: 'email',
        url: 'karolgardyjas@gmail.com',
      },
      {
        name: 'gitHub',
        url: 'https://github.com/KarolGitHub',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/karolgardyjas',
      },
    ],
    projects: [
      {
        name: 'Burger Builder',
        demo: 'https://burger-builder-46554.web.app',
        code: 'https://github.com/KarolGitHub/BurgerBuilder',
        desc:
          'Progressive web app made with React, Redux, Javascript, CSS Modules, Firebase.',
      },
      {
        name: 'Spotify Playlist Maker',
        demo: 'https://spotifyplaylistmaker-9f04b.web.app/',
        code: 'https://github.com/KarolGitHub/SpotifyPlaylistMaker',
        desc:
          'Progressive web app made with React, Redux, Typescript, Sass, Firebase.',
      },
      {
        name: 'Portfolio',
        code: 'https://github.com/KarolGitHub/Portfolio-website',
        desc:
          'Summary of my work as Frontend developer, also a place where I publish my projects including personal blog. Made with GatsbyJS from scratch, new blog posts are done via Netlify CMS',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        cmsConfig: `static/admin/config.yml`,
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby-blog`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require('./src/utils/algolia'),
        chunkSize: 10000,
      },
    },
  ],
};
