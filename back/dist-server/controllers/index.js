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
  GetTest: new _TestControllers["default"]().get,
  PostTest: new _TestControllers["default"]().post,
  // MonitControllers
  GetMonit: new _MonitControllers["default"]().get,
  // ProfileControllers
  GetProfile: new _ProfileControllers["default"]().get,
  PostProfile: new _ProfileControllers["default"]().post,
  PutProfile: new _ProfileControllers["default"]().put,
  // AuthControllers
  LoginAuth: new _AuthControllers["default"]().login,
  RegisterAuth: new _AuthControllers["default"]().create,
  // UserControllers
  PutAccount: new _UserControllers["default"]().putAccount,
  PutPassword: new _UserControllers["default"]().putPassword,
  CheckPassword: new _UserControllers["default"]().checkPassword // XXXControllers
  // GetXXX: new XXXControllers().get,

};