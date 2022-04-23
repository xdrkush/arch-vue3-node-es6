"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var mongoose = require('mongoose');

require('dotenv').config();

console.log('process', process.env.MONGO_URI);

var Connection = /*#__PURE__*/function () {
  function Connection() {
    (0, _classCallCheck2["default"])(this, Connection);
  }

  (0, _createClass2["default"])(Connection, [{
    key: "databaseConnection",
    value: function databaseConnection() {
      try {
        var connect = mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
        if (!connect) console.log('connection failed');
        this.connect = connect;
        return connect;
      } catch (error) {
        throw error;
      }
    }
  }]);
  return Connection;
}();

module.exports = Connection;