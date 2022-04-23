"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _TestControllers = _interopRequireDefault(require("./TestControllers"));

var _MonitControllers = _interopRequireDefault(require("./MonitControllers"));

module.exports = {
  // TestControllers
  GetTest: new _TestControllers["default"]().get,
  PostTest: new _TestControllers["default"]().post,
  // MonitControllers
  GetMonit: new _MonitControllers["default"]().get // XXXControllers
  // GetXXX: new XXXControllers().get,

};