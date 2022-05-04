"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var mongoose = require('mongoose');

require('dotenv').config();

var _process$env = process.env,
    DB_HOST = _process$env.DB_HOST,
    DB_NAME = _process$env.DB_NAME,
    DB_USER = _process$env.DB_USER,
    DB_PASSWORD = _process$env.DB_PASSWORD,
    DB_PORT = _process$env.DB_PORT,
    DB_CLOUD = _process$env.DB_CLOUD,
    DB_URL = _process$env.DB_URL,
    DOCKER = _process$env.DOCKER;

var Connection = /*#__PURE__*/function () {
  function Connection() {
    (0, _classCallCheck2["default"])(this, Connection);
    console.log('Connection PROCESS', DOCKER);
    this.mongo_uri = DB_CLOUD === "true" ? DB_URL : DOCKER === "true" ? "mongodb://".concat(DB_USER, ":").concat(DB_PASSWORD, "@").concat(DB_HOST, ":").concat(DB_PORT, "/").concat(DB_NAME, "?authSource=admin") : "mongodb://".concat(DB_HOST, ":").concat(DB_PORT, "/").concat(DB_NAME);
  }

  (0, _createClass2["default"])(Connection, [{
    key: "databaseConnection",
    value: function databaseConnection() {
      try {
        console.log('Connection');
        var connect = mongoose.connect(this.mongo_uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
        if (!connect) console.log('connection failed'); // else console.log('MONGODB :: connection success ');

        this.connect = connect;
        return connect;
      } catch (error) {
        throw error;
      }
    }
  }]);
  return Connection;
}();

exports["default"] = Connection;