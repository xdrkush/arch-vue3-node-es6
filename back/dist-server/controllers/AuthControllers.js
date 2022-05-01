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

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _UserModel = _interopRequireDefault(require("../models/User.model.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// Ramasse miette (clean de l'objet)
var privateProps = new WeakMap();

require('dotenv').config();

var AuthControllers = /*#__PURE__*/function (_Connection) {
  (0, _inherits2["default"])(AuthControllers, _Connection);

  var _super = _createSuper(AuthControllers);

  function AuthControllers() {
    var _this;

    (0, _classCallCheck2["default"])(this, AuthControllers);
    _this = _super.call(this);
    privateProps.set(_this.databaseConnection());
    return _this;
  }

  (0, _createClass2["default"])(AuthControllers, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, mail, password, name;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log('POST Register Login', req.body)
                _req$body = req.body, mail = _req$body.mail, password = _req$body.password, name = _req$body.name;
                _context.prev = 1;
                return _context.abrupt("return", res.send({
                  status: "OK",
                  message: "Hi !"
                }));

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](1);
                throw _context.t0;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 5]]);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _req$body2, mail, password, userAuthEmail, userAuthPseudo, user, match, token;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // console.log('POST Auth Login', req.body)
                _req$body2 = req.body, mail = _req$body2.mail, password = _req$body2.password;
                _context2.prev = 1;
                _context2.next = 4;
                return _UserModel["default"].findOne({
                  mail: mail
                });

              case 4:
                userAuthEmail = _context2.sent;
                _context2.next = 7;
                return _UserModel["default"].findOne({
                  name: mail
                });

              case 7:
                userAuthPseudo = _context2.sent;
                if (mail, password) user = userAuthEmail || userAuthPseudo;

                if (user) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", res.json({
                  error: "l' email ou le nom n'existe pas."
                }));

              case 11:
                _context2.next = 13;
                return _bcrypt["default"].compare(password, user.password);

              case 13:
                match = _context2.sent;

                if (!match) {
                  _context2.next = 19;
                  break;
                }

                token = _jsonwebtoken["default"].sign({
                  name: user.name,
                  mail: user.mail,
                  phone: user.phone,
                  description: user.description,
                  loggedIn: match
                }, process.env.JWT_TOKEN, {
                  expiresIn: "4h"
                });
                return _context2.abrupt("return", res.send({
                  status: "success",
                  message: "Method Post User Controller",
                  loggedIn: match,
                  token: token
                }));

              case 19:
                return _context2.abrupt("return", res.send({
                  status: "success",
                  message: "Oops !"
                }));

              case 20:
                _context2.next = 25;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](1);
                throw _context2.t0;

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 22]]);
      }));

      function login(_x3, _x4) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);
  return AuthControllers;
}(_ConnectionDB["default"]);

exports["default"] = AuthControllers;