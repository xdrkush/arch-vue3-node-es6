"use strict";

var _express = _interopRequireDefault(require("express"));

var _TestControllers = _interopRequireDefault(require("../controllers/TestControllers"));

var _TestMiddleware = require("../middlewares/TestMiddleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Modules
// Controllers
// Middlewares
var router = _express["default"].Router();

router.route('/').get(_TestMiddleware.TestMD, new _TestControllers["default"]().get).post(new _TestControllers["default"]().post);
module.exports = router;