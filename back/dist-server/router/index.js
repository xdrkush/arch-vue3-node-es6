"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

var _TestMiddleware = require("../middlewares/TestMiddleware");

// Modules
// Controllers
// Middlewares
var router = _express["default"].Router();

router.route('/').get(_TestMiddleware.TestMD, _controllers.GetTest).post(_controllers.PostTest);
router.route('/landing').get(_TestMiddleware.TestMD, _controllers.GetMonit);
module.exports = router;