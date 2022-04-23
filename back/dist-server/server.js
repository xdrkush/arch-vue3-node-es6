"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _Server = _interopRequireDefault(require("./server/Server"));

// server.js
console.log('Hello ES6 !');

// Import .env
require('dotenv').config();

var app = (0, _express["default"])();
var server = new _Server["default"](app);
server.config();
module.exports = server.app;