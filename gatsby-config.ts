import type { GatsbyConfig } from "gatsby";

import * as dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Raymond & Kimi`,
    description: `Wedding Stuff for R&K`,
    author: "Raymond Yau",
    twitterUsername: `@rcwyau`,
    siteUrl: `https://weddingkr.gatsbyjs.io`,
    image: `./icon.png`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [

    `gatsby-plugin-svgr-svgo`,
    `gatsby-plugin-mantine`,
    "gatsby-plugin-image", 
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        // defaults: {
          // formats: [`auto`, `webp`],
          // placeholder: `dominantColor`,
          // quality: 50,
          // breakpoints: [750, 1080, 1366, 1920],
          // backgroundColor: `transparent`,
          // tracedSVGOptions: {},
          // blurredOptions: {},
          // jpgOptions: {},
          // pngOptions: {},
          // webpOptions: {},
          // avifOptions: {},
        // },
        // Set to none to allow builds to continue on image errors
        // failOn: `none`,
        // deprecated options and their defaults:
        // base64Width: 20,
        // forceBase64Format: ``, // valid formats: png,jpg,webp
        // useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        // stripMetadata: true,
        // defaultQuality: 50,
      },
    },       
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },    
    {
      resolve: `gatsby-plugin-mdx`, 
      options: {
        extensions: [`.mdx`,`.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
             // maxWidth: 590,
            },
          },
        ],
        mdxOptions: {
          remarkPlugins: [
            // Add GitHub Flavored Markdown (GFM) support
            // require(`remark-gfm`),
            // To pass options, use a 2-element array with the
            // configuration in an object in the second element
            // [require(`remark-external-links`), { target: false }],
          ],
          rehypePlugins: [
            // Generate heading ids for rehype-autolink-headings
            // require(`rehype-slug`),
            // To pass options, use a 2-element array with the
            // configuration in an object in the second element
            // [require(`rehype-autolink-headings`), { behavior: `wrap` }],
          ],
        },                
      },


    },

    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": `images`,
      "path": `${__dirname}/src/images/`
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": `pages`,
      "path": `${__dirname}/src/pages/`
    },
    __key: "pages"
  },
  { 
    resolve: `gatsby-transformer-json`,
    options: {
      typeName: `event`,
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options:{
      "path": `${__dirname}/src/data/`,
      
    }

  }
]
};

export default config;
