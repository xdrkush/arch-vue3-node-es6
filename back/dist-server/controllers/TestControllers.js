"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ConnectionDB = _interopRequireDefault(require("../config/ConnectionDB"));

var _ArticleModel = _interopRequireDefault(require("../models/Article.model.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// Ramasse miette (clean de l'objet)
var privateProps = new WeakMap();

var TestControllers = /*#__PURE__*/function (_Connection) {
  (0, _inherits2["default"])(TestControllers, _Connection);

  var _super = _createSuper(TestControllers);

  function TestControllers() {
    var _this;

    (0, _classCallCheck2["default"])(this, TestControllers);
    _this = _super.call(this);
    privateProps.set(_this.databaseConnection());
    return _this;
  }

  (0, _createClass2["default"])(TestControllers, [{
    key: "get",
    value: function get(req, res) {
      // Article.create({title: 'mon super titre', descritption: 'ma super description'},(err, data) => {
      //   if (err) console.log('Error', err)
      //   console.log('data', data)
      // })
      // const dbArticle = await Article.find()
      // Article.find((err, data) => {
      //   if (err) console.log('Error', err)
      //   console.log('data', data)
      // })
      try {
        return res.send({
          status: "success",
          message: "Method Get Test Controller" // data

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
}(_ConnectionDB["default"]);

exports["default"] = TestControllers;