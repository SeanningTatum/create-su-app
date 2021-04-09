import server from './server';

server().listen(3000, () => {
  console.log(`App listening on port ${3000}`);
});
