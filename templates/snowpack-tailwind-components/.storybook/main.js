const path = require('path');

module.exports = {
  "stories": [
    "./docs/*.stories.mdx",
    "../src/components/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      "node_modules",
    ]

    config.resolve.alias = {
      ...config.resolve.alias,
      "@app": path.resolve(__dirname, '../src/')
    }


    return config;
  }
}