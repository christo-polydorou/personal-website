module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "", 
        manifestSettings: {
          favicon: "./content/images/profile-square.png",
          siteName: "Christo Polydorou",
          shortName: "Christo",
          startUrl: "/",
          backgroundColor: "#FFFFFF",
          themeColor: "#000000",
          display: "minimal-ui",
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog",
          usePathPrefixForArticles: true,
        },
      },
    },
  ],
};
