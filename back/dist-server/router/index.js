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
router.route('/profile').get(_controllers.GetProfile).post(_controllers.PostProfile).put(_controllers.PutProfile);
router.route('/auth').put(_controllers.LoginAuth).post(_controllers.RegisterAuth);
router.route('/account').post(_controllers.PutAccount).put(_controllers.PutPassword);
router.route('/check/password').put(_controllers.CheckPassword);
module.exports = router;