const path = require('path');

module.exports = {
  "stories": [
    "./docs/*.stories.mdx",
    "../src/app/Core/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      "node_modules",
    ]

    config.resolve.alias = {
      ...config.resolve.alias,
      "@Core": path.resolve(__dirname, '../src/app/Core')
    }


    return config;
  },
  "framework": "@storybook/react"
}
