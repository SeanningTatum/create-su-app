const httpProxy = require('http-proxy');

const proxy = httpProxy.createServer({ target: 'http://localhost:3000' });

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    'client/public': { url: '/', static: true },
    'client/src': { url: '/dist' },
    // client: { url: '/client/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-postcss',
  ],
  alias: {
    '~': './src',
  },
  env: {
    API_URL: 'http://localhost:3000',
  },
  routes: [
    {
      src: '/api/.*',
      dest: (req, res) => {
        proxy.web(req, res);
      },
    },
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    // If App doesn't build anymore comment everything below
    // bundle: true,
    // minify: true,
    // target: 'es2018',
    // sourcemap: false,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */

  },
};
