"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _TestControllers = _interopRequireDefault(require("./TestControllers"));

var _MonitControllers = _interopRequireDefault(require("./MonitControllers"));

var _ProfileControllers = _interopRequireDefault(require("./ProfileControllers"));

var _AuthControllers = _interopRequireDefault(require("./AuthControllers"));

var _UserControllers = _interopRequireDefault(require("./UserControllers"));

// Script for interact with DB
// require('../config/script_db')
module.exports = {
  // TestControllers
  GetTest: function GetTest(req, res) {
    return new _TestControllers["default"]().get(req, res);
  },
  PostTest: function PostTest(req, res) {
    return new _TestControllers["default"]().post(req, res);
  },
  // MonitControllers
  GetMonit: function GetMonit(req, res) {
    return new _MonitControllers["default"]().get(req, res);
  },
  // ProfileControllers
  GetProfile: function GetProfile(req, res) {
    return new _ProfileControllers["default"]().get(req, res);
  },
  PostProfile: function PostProfile(req, res) {
    return new _ProfileControllers["default"]().post(req, res);
  },
  PutProfile: function PutProfile(req, res) {
    return new _ProfileControllers["default"]().put(req, res);
  },
  // AuthControllers
  LoginAuth: function LoginAuth(req, res) {
    return new _AuthControllers["default"]().login(req, res);
  },
  RegisterAuth: function RegisterAuth(req, res) {
    return new _AuthControllers["default"]().create(req, res);
  },
  // UserControllers
  PutAccount: function PutAccount(req, res) {
    return new _UserControllers["default"]().putAccount(req, res);
  },
  PutPassword: function PutPassword(req, res) {
    return new _UserControllers["default"]().putPassword(req, res);
  },
  CheckPassword: function CheckPassword(req, res) {
    return new _UserControllers["default"]().checkPassword(req, res);
  } // XXXControllers
  // GetXXX: (req, res) => new XXXControllers().get,

};