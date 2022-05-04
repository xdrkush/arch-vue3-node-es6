"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ConnectionDB = _interopRequireDefault(require("../config/ConnectionDB"));

var _UserModel = _interopRequireDefault(require("../models/User.model.js"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// Ramasse miette (clean de l'objet)
var privateProps = new WeakMap();

var UserControllers = /*#__PURE__*/function (_Connection) {
  (0, _inherits2["default"])(UserControllers, _Connection);

  var _super = _createSuper(UserControllers);

  function UserControllers() {
    var _this;

    (0, _classCallCheck2["default"])(this, UserControllers);
    _this = _super.call(this);
    privateProps.set(_this.databaseConnection());
    return _this;
  }

  (0, _createClass2["default"])(UserControllers, [{
    key: "putAccount",
    value: function () {
      var _putAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, oldName, Password, user, match;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log('PUT User by name', req.body)
                _req$body = req.body, oldName = _req$body.oldName, Password = _req$body.Password;
                _context.prev = 1;
                _context.next = 4;
                return _UserModel["default"].findOne({
                  name: oldName
                });

              case 4:
                user = _context.sent;
                _context.next = 7;
                return _bcrypt["default"].compare(Password, user.password);

              case 7:
                match = _context.sent;

                if (match) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", res.status(200).json({
                  message: "Mot de passe incorect"
                }));

              case 12:
                if (oldName && match) _UserModel["default"].findOneAndUpdate({
                  name: oldName
                }, _objectSpread({}, req.body), function (err, data) {
                  if (err) console.log(err); // else console.log('data', data)
                });

              case 13:
                return _context.abrupt("return", res.status(200).json({
                  status: "success",
                  message: "Method Post User Controller"
                }));

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](1);
                throw _context.t0;

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 16]]);
      }));

      function putAccount(_x, _x2) {
        return _putAccount.apply(this, arguments);
      }

      return putAccount;
    }()
  }, {
    key: "checkPassword",
    value: function () {
      var _checkPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _req$body2, oldName, Password, user, match;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // console.log('PUT checkPassword', req.body)
                _req$body2 = req.body, oldName = _req$body2.oldName, Password = _req$body2.Password;
                _context2.prev = 1;
                _context2.next = 4;
                return _UserModel["default"].findOne({
                  name: oldName
                });

              case 4:
                user = _context2.sent;
                _context2.next = 7;
                return _bcrypt["default"].compare(Password, user.password);

              case 7:
                match = _context2.sent;

                if (match) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt("return", res.status(200).json({
                  message: "Mot de passe incorect",
                  checked: false
                }));

              case 12:
                return _context2.abrupt("return", res.status(200).json({
                  status: "success",
                  checked: true,
                  message: "Method check Password Controller"
                }));

              case 13:
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](1);
                throw _context2.t0;

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 15]]);
      }));

      function checkPassword(_x3, _x4) {
        return _checkPassword.apply(this, arguments);
      }

      return checkPassword;
    }()
  }, {
    key: "putPassword",
    value: function () {
      var _putPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var _req$body3, oldName, Password, newPassword, confirmPassword, user, match, hash;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // console.log('PUT User by name', req.body)
                _req$body3 = req.body, oldName = _req$body3.oldName, Password = _req$body3.Password, newPassword = _req$body3.newPassword, confirmPassword = _req$body3.confirmPassword; // console.log('PUT password', oldName, Password, newPassword, confirmPassword)

                _context3.prev = 1;

                if (!(newPassword === confirmPassword)) {
                  _context3.next = 22;
                  break;
                }

                _context3.next = 5;
                return _UserModel["default"].findOne({
                  name: oldName
                });

              case 5:
                user = _context3.sent;
                _context3.next = 8;
                return _bcrypt["default"].compare(Password, user.password);

              case 8:
                match = _context3.sent;
                hash = _bcrypt["default"].hashSync(req.body.confirmPassword, 10);

                if (user) {
                  _context3.next = 12;
                  break;
                }

                return _context3.abrupt("return", res.status(200).json({
                  message: "User inconnu"
                }));

              case 12:
                if (match) {
                  _context3.next = 14;
                  break;
                }

                return _context3.abrupt("return", res.status(200).json({
                  message: "Mot de passe incorect"
                }));

              case 14:
                if (hash) {
                  _context3.next = 18;
                  break;
                }

                return _context3.abrupt("return", res.status(200).json({
                  message: "Problème avec le nouveau mot de passe"
                }));

              case 18:
                if (oldName && hash && match) _UserModel["default"].findOneAndUpdate({
                  name: oldName
                }, {
                  password: hash
                }, function (err, data) {
                  if (err) console.log(err); // else console.log('data', data, hash)
                });

              case 19:
                return _context3.abrupt("return", res.send({
                  status: "success",
                  message: "Method Post User Controller"
                }));

              case 22:
                return _context3.abrupt("return", res.status(200).json({
                  message: "Une erreur est survenu"
                }));

              case 23:
                _context3.next = 28;
                break;

              case 25:
                _context3.prev = 25;
                _context3.t0 = _context3["catch"](1);
                throw _context3.t0;

              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 25]]);
      }));

      function putPassword(_x5, _x6) {
        return _putPassword.apply(this, arguments);
      }

      return putPassword;
    }()
  }]);
  return UserControllers;
}(_ConnectionDB["default"]);

exports["default"] = UserControllers;