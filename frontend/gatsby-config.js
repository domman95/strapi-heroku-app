module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'gatsby-strapi-frontend',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://strapi-first-project1.herokuapp.com/api`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`developers`],
      },
    },
  ],
};
