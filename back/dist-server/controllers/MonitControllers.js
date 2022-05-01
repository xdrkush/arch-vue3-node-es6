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

var _MonitModel = _interopRequireDefault(require("../models/Monit.model.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// Ramasse miette (clean de l'objet)
var privateProps = new WeakMap();

var MonitControllers = /*#__PURE__*/function (_Connection) {
  (0, _inherits2["default"])(MonitControllers, _Connection);

  var _super = _createSuper(MonitControllers);

  function MonitControllers() {
    var _this;

    (0, _classCallCheck2["default"])(this, MonitControllers);
    _this = _super.call(this);
    privateProps.set(_this.databaseConnection());
    return _this;
  }

  (0, _createClass2["default"])(MonitControllers, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var dbMonit;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _MonitModel["default"].find();

              case 2:
                dbMonit = _context.sent;
                _context.prev = 3;
                return _context.abrupt("return", res.status(200).json({
                  status: "success",
                  message: "Method Get Monit Controller",
                  landing: dbMonit[0].landing
                }));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](3);
                throw _context.t0;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 7]]);
      }));

      function get(_x, _x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
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
  return MonitControllers;
}(_ConnectionDB["default"]);

exports["default"] = MonitControllers;