
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Asymetrics International`,
    siteUrl: `https://www.theasymetrics.com`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/img/logo_256.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/img/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: "./src/articles",
      name: 'articles',
    },
  },
  // {
  //   resolve: `gatsby-plugin-layout`,
  //   options: {
  //     component: require.resolve(`./src/components/layout/layout.tsx`),
  //   },
  // },
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Montserrat`,
          file: `https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300&display=swap`,
        },
        {
          name: `Nunito`,
          file: `https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap`,
        },
      ],
    },
  },
]
};

export default config;
