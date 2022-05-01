// server.js
import express from 'express';
import Server from './server/Server';

// Import .env
require('dotenv').config();

var app = express();

const server = new Server(app);
server.config()

module.exports = server.app;
