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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
        var info, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _UserModel["default"].findOne({
                  isProp: true
                }, ["nameCompany", "name", "mail", "phone", "address", "social", "description"]);

              case 2:
                user = _context.sent;

                if (user) {
                  info = {
                    nameCompany: user.nameCompany,
                    name: user.name,
                    mail: user.mail,
                    phone: user.phone,
                    address: user.address,
                    social: user.social,
                    description: user.description
                  };
                }

                _context.prev = 4;
                return _context.abrupt("return", res.status(200).json({
                  status: "success",
                  message: "Method Get Monit Controllersssss",
                  profile: info ? info : "Aucun Profile"
                }));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](4);
                throw _context.t0;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 8]]);
      }));

      function get(_x, _x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "post",
    value: function post(req, res) {
      var _req$body = req.body,
          name = _req$body.name,
          mail = _req$body.mail,
          phone = _req$body.phone,
          description = _req$body.description;

      try {
        // User.create({
        //   name: 'user',
        //   mail: 'user@user.user',
        //   phone: '01.01.01.01.01',
        //   description: "Skevent dleout danvez biz-yod rumm goz gar tabut bazh mil skrijañ, Menez Du dec'h ehan kreisteiz neud tad eil huanadiñ bed lizherenn. Lies gwinegr c'hoar-gaer. Houlenn Menez Mikael anv koumoul, broust brumenn daoust ha. Ret ki lazhañ dianav gwenn hor beg-douar arabat skubañ ken truez tre kar hon leue droug-mor, chom hennezh hag Bro-saoz. Ma fazi geot kein gwechall, rak mil c'hwezhañ e fri hor kae diwar-benn ",
        // })
        return res.send({
          status: "success",
          message: "Method Post User Controller"
        });
      } catch (_unused) {
        throw error;
      }
    }
  }, {
    key: "put",
    value: function put(req, res) {
      // console.log('PUT User by name', req.body)
      var oldName = req.body.oldName;

      try {
        if (oldName) _UserModel["default"].findOneAndUpdate({
          name: oldName
        }, _objectSpread({}, req.body), function (err, data) {// if (err) console.log(err)
          // else console.log('data', data)
        });
        return res.send({
          status: "success",
          message: "Method Post User Controller"
        });
      } catch (_unused2) {
        throw error;
      }
    }
  }]);
  return MonitControllers;
}(_ConnectionDB["default"]);

exports["default"] = MonitControllers;