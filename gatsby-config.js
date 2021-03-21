require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitleAlt: `lims4010 - website`,
    siteTitle: "lims4010",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./node_modules/@lekoarts/gatsby-theme-minimal-blog/src/", // <- will be used as a root dir
        aliases: {
          "@components": "./components",
        },
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          // {
          //   title: `Blog`,
          //   slug: `/blog`,
          // },
          // {
          //   title: `About`,
          //   slug: `/about`,
          // },
        ],
        externalLinks: [
          {
            name: `github`,
            url: `https://github.com/lims4010`,
          },
          {
            name: `linkedin`,
            url: `https://www.linkedin.com/in/sol-lim-45a983115/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
};
