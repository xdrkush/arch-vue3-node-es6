// server.js
console.log('Hello ES6 !')

import express from 'express';
import Server from './server/Server';

// Import .env
require('dotenv').config();

var app = express();

const server = new Server(app);
server.config()

module.exports = server.app;
