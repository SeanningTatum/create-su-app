const { status } = require('server/reply');

function getItems(req) {
  //
  // return status(400).json({
  //   message: 'Bad Request',
  //   code: 400,
  //   body: [],
  // });

  return status(200).json({ what: 'hello' });
}

function addToCart(req) {
  return status(200).json({ what: 'hello' });
}

module.exports = {
  getItems,
  addToCart,
};
