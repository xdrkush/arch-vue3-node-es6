"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _TestControllers = _interopRequireDefault(require("../controllers/TestControllers"));

var _MonitControllers = _interopRequireDefault(require("../controllers/MonitControllers"));

var _TestMiddleware = require("../middlewares/TestMiddleware");

// Modules
// Controllers
// Middlewares
var router = _express["default"].Router(); // let cb = new TestControllers();
// // cb.connectedCallback()


router.route('/').get(_TestMiddleware.TestMD, new _TestControllers["default"]().get).post(new _TestControllers["default"]().post);
router.route('/landing').get(_TestMiddleware.TestMD, new _MonitControllers["default"]().get);
module.exports = router;