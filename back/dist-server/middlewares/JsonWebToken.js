"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ConnectionDB = _interopRequireDefault(require("../config/ConnectionDB"));

var _User = _interopRequireDefault(require("../models/User.model"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var privateProps = new WeakMap();

require('dotenv').config();

var JsonWebToken = /*#__PURE__*/function (_Connection) {
  (0, _inherits2["default"])(JsonWebToken, _Connection);

  var _super = _createSuper(JsonWebToken);

  function JsonWebToken() {
    var _this;

    (0, _classCallCheck2["default"])(this, JsonWebToken);
    _this = _super.call(this);
    privateProps.set(_this.databaseConnection());
    return _this;
  } // Token is valid


  (0, _createClass2["default"])(JsonWebToken, [{
    key: "isValid",
    value: function isValid(req, res, next) {
      console.log('MD isValid', req.headers);

      var isValid = _jsonwebtoken["default"].verify(req.headers.authorization, process.env.JWT_TOKEN);

      if (!isValid) return res.status(403).send('Error');else {
        req.token = isValid;
        return next();
      }
    } // isAdmin

  }, {
    key: "isAdmin",
    value: function () {
      var _isAdmin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('MD isAdmin', req.token);

                if (!(!req.token.loggedIn || req.token.loggedIn !== true)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", res.send('Error'));

              case 3:
                _context.next = 5;
                return _User["default"].findOne({
                  name: req.token.name,
                  isAdmin: true
                });

              case 5:
                user = _context.sent;

                if (user) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", res.status(403).send('Error'));

              case 10:
                return _context.abrupt("return", next());

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function isAdmin(_x, _x2, _x3) {
        return _isAdmin.apply(this, arguments);
      }

      return isAdmin;
    }() // isProp

  }, {
    key: "isProp",
    value: function () {
      var _isProp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
        var user;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('MD isProp', req.token);

                if (!(!req.token.loggedIn || req.token.loggedIn !== true)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", res.send('Error'));

              case 3:
                _context2.next = 5;
                return _User["default"].findOne({
                  name: req.token.name,
                  isAdmin: true,
                  isProp: true
                });

              case 5:
                user = _context2.sent;

                if (user) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", res.status(403).send('Error'));

              case 10:
                return _context2.abrupt("return", next());

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function isProp(_x4, _x5, _x6) {
        return _isProp.apply(this, arguments);
      }

      return isProp;
    }() // isRoot

  }, {
    key: "isRoot",
    value: function () {
      var _isRoot = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
        var user;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('MD isRoot', req.token);

                if (!(!req.token.loggedIn || req.token.loggedIn !== true)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", res.send('Error'));

              case 3:
                _context3.next = 5;
                return _User["default"].findOne({
                  name: req.token.name,
                  isAdmin: true,
                  isRoot: true
                });

              case 5:
                user = _context3.sent;

                if (user) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return", res.status(403).send('Error'));

              case 10:
                return _context3.abrupt("return", next());

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function isRoot(_x7, _x8, _x9) {
        return _isRoot.apply(this, arguments);
      }

      return isRoot;
    }()
  }]);
  return JsonWebToken;
}(_ConnectionDB["default"]);

exports["default"] = JsonWebToken;