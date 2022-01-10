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
        apiURL: `http://localhost:1337/api`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`developers`],
      },
    },
  ],
};
