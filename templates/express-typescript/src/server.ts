import './moduleAlias';
import dotenv from 'dotenv';
import express from 'express';

import bodyParser from 'body-parser';
// import swaggerUI from 'swagger-ui-express';

dotenv.config();

export default function createServer() {
  const server = express();

  // MongoDB Setup

  server.use(express.static('build'));
  // Body Parser
  server.use(bodyParser.json());

  // Routes
  // server.use('/api/v1', versionOneRoutes);

  return server;
}
