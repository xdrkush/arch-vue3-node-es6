"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireDefault(require("../router/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Server = /*#__PURE__*/function () {
  function Server(app, port) {
    _classCallCheck(this, Server);

    this.app = app;
    this.port = port;
  }

  _createClass(Server, [{
    key: "config",
    value: function config() {
      // Log
      this.app.use((0, _morgan["default"])('dev')); // Parse Json (Body-Parser)

      this.app.use(_express["default"].json());
      this.app.use(_express["default"].urlencoded({
        extended: false
      })); // Cookie

      this.app.use((0, _cookieParser["default"])()); // File Static '/assets'

      this.app.use('/assets', _express["default"]["static"](_path["default"].join(__dirname, 'public'))); // Cors

      this.app.use((0, _cors["default"])({
        origin: ['http://localhost:8080', 'http://localhost:8081', 'https://domain.com/', 'http://domain.com/'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
      })); // Body Parser

      this.app.use(_express["default"].json()); // Routes

      this.app.use(_index["default"]);
    }
  }]);

  return Server;
}();

exports["default"] = Server;