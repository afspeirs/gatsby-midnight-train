module.exports = {
  siteMetadata: {
    title: 'Midnight Train',
    description: 'Midnight Train play a blend of classic up tempo blues with a mix of sometimes surprising songs infused with their unique style and sound.',
    siteUrl: 'https://midnight-train.speirs.dev/',
    social: {
      facebook: 'https://www.facebook.com/originalmidnighttrain',
      soundcloud: 'https://soundcloud.com/user-840933974',
      youtube: 'https://www.youtube.com/channel/UCvIgND9mxw6_YeXCUg0hnvw',
    },
    author: 'Andy Speirs',
    menuLinks: [
      {
        link: '/',
        name: 'Home',
      },
      {
        link: '/events/',
        name: 'Events',
      },
      {
        link: '/videos/',
        name: 'Videos',
      },
      {
        link: '/band-members/',
        name: 'Band Members',
      },
      {
        link: '/contact-us/',
        name: 'Contact Us',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'events',
        path: `${__dirname}/content/events`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Midnight Train',
        short_name: 'Midnight Train',
        start_url: '/',
        background_color: '#f5f5f5',
        theme_color: '#231F20',
        display: 'minimal-ui',
        icon: 'content/assets/midnight-train-logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
  ],
};
