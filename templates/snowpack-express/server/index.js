const server = require('server');
const { render } = require('server/reply');

const itemController = require('./controllers/items');

const { get } = server.router;
const { header } = server.reply;

const cors = [
  () => header('Access-Control-Allow-Origin', '*'),
  () => header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'),
  () => header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, HEAD'),
  (ctx) => (ctx.method.toLowerCase() === 'options' ? 200 : false),
];

const api = [
  // Items
  get('/api/items', itemController.getItems),

];

const middleware = [
  cors,
  api,
  () => render('../build/index.html'),
];

server({
  public: 'build',
  port: 3000,
  parser: {
    body: { limit: '1mb' },
    json: { limit: '1mb' },
  },

}, [...middleware]).then(() => {
  console.log('Server is running on port 3000 🚀');
});
