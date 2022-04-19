"use strict";

var _TestControllers = _interopRequireDefault(require("./TestControllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  // TestControllers
  GetTest: new _TestControllers["default"]().get,
  PostTest: new _TestControllers["default"]().post // XXXControllers
  // GetXXX: new XXXControllers().get,

};