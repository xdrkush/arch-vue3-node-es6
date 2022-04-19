"use strict";

var _express = _interopRequireDefault(require("express"));

var _Server = _interopRequireDefault(require("./server/Server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
console.log('Hello ES6 !');

// Import .env
require('dotenv').config();

var app = (0, _express["default"])();
var server = new _Server["default"](app);
server.config();
module.exports = server.app;