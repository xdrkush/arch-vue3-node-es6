"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var mongoose = require('mongoose');

require('dotenv').config();

console.log('process', process.env.MONGO_URI);

var Connection = /*#__PURE__*/function () {
  function Connection() {
    _classCallCheck(this, Connection);
  }

  _createClass(Connection, [{
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