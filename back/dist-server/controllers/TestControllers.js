"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// const Connection = require("../config/ConnectionDB");
// const Article = require("../models/Article.model.js");
// Ramasse miette (clean de l'objet)
// const privateProps = new WeakMap();
// class TestControllers extends Connection {
var TestControllers = /*#__PURE__*/function () {
  function TestControllers() {// super();
    // privateProps.set(this.databaseConnection());

    _classCallCheck(this, TestControllers);
  }

  _createClass(TestControllers, [{
    key: "get",
    value: function get(req, res) {
      try {
        return res.send({
          status: "success",
          message: "Method Get Test Controller"
        });
      } catch (error) {
        throw error;
      }
    }
  }, {
    key: "post",
    value: function post(req, res) {
      try {
        return res.send({
          status: "success",
          message: "Method Post Test Controller"
        });
      } catch (_unused) {
        throw error;
      }
    }
  }]);

  return TestControllers;
}();

var _default = TestControllers;
exports["default"] = _default;