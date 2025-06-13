require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Gatsby-blog',
    description: 'Blog made with Gatsby, Typescript, Javascript, React hooks, emotion, deployed using Netlify',
    author: 'Karol Gardyjas',
    social: [
      {
        name: 'email',
        url: 'karolgardyjas@gmail.com',
      },
      {
        name: '@KarolGitHub',
        url: 'https://github.com/KarolGitHub',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/karolgardyjas',
      },
    ],
    projects: [
      {
        name: 'Portfolio',
        code: 'https://github.com/KarolGitHub/Portfolio-website',
        desc:
          'Summary of my work as front-end developer, also a place where I publish my projects including personal blog. Made with Gatsby.js from scratch, new blog posts are done via Netlify CMS.',
        icon: 'portfolio.png',
      },
      {
        name: 'Lucidify',
        demo: 'https://lucidify.netlify.app/',
        code: 'https://github.com/KarolGitHub/lucidify',
        desc:
          'Progressive web app for dream journaling built with Vue 3, TypeScript, Tailwind CSS, Node.js, MongoDB, and Firebase Authentication.',
        icon: '',
      },
      {
        name: 'Next.js E-commerce',
        demo: 'https://nextjs-ecommerce-psi-bice.vercel.app/',
        code: 'https://github.com/KarolGitHub/nextjs-ecommerce',
        desc: 'E-commerce store built with Next.js + MongoDB + PayPal API.',
        icon: 'ecommerce.png',
      },
      {
        name: 'Spotify Playlist Maker',
        demo: 'https://spotifyplaylistmaker-9f04b.web.app/',
        code: 'https://github.com/KarolGitHub/SpotifyPlaylistMaker',
        desc: 'Progressive web app made with React, Redux, Typescript, Sass, Firebase.',
        icon: 'spm.png',
      },
      {
        name: 'Burger Builder',
        demo: 'https://burger-builder-46554.web.app',
        code: 'https://github.com/KarolGitHub/BurgerBuilder',
        desc: 'Progressive web app made with React, Redux, Javascript, CSS Modules, Firebase.',
        icon: 'bb.png',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify`,
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
        background_color: `#215973`,
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
