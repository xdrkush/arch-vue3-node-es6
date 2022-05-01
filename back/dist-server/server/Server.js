"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireDefault(require("../router/index"));

var _helmet = _interopRequireDefault(require("helmet"));

require('../config/script_db');

var Server = /*#__PURE__*/function () {
  function Server(app) {
    (0, _classCallCheck2["default"])(this, Server);
    this.app = app;
  }

  (0, _createClass2["default"])(Server, [{
    key: "config",
    value: function config() {
      // Log
      this.app.use((0, _morgan["default"])('dev')); // Helmet

      this.app.use((0, _helmet["default"])()); // Config default

      this.app.disable('x-powered-by'); // Headers

      this.app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Autorization, X-WEBAPP');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
      }); // Cors

      this.app.use((0, _cors["default"])({
        origin: ['http://localhost:8080', 'http://ahuart.com', 'https://ahuart.com', 'http://www.ahuart.com', 'https://www.ahuart.com'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        credentials: true
      })); // Parse Json (Body-Parser)

      this.app.use(_bodyParser["default"].json({
        limit: '5mb'
      }));
      this.app.use(_bodyParser["default"].urlencoded({
        extended: false
      })); // Cookie

      this.app.use((0, _cookieParser["default"])()); // File Static '/assets'

      this.app.use('/assets', _express["default"]["static"](_path["default"].join(__dirname, 'public'))); // Routes

      this.app.use('/api', _index["default"]);
    }
  }]);
  return Server;
}();

exports["default"] = Server;