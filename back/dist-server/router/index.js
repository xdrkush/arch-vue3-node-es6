"use strict";

var _express = require("express");

var _controllers = require("../controllers");

var _index = require("../middlewares/index");

// Modules
// Controllers
// Middlewares
var router = (0, _express.Router)();
router.use(_index.tokenVisitor);
router.route('/').get(_controllers.GetTest).post(_controllers.PostTest);
router.route('/landing').get(_controllers.GetMonit);
router.route('/profile').get(_controllers.GetProfile).post(_index.isValid, _index.isAdmin, _controllers.PostProfile).put(_index.isValid, _index.isAdmin, _controllers.PutProfile);
router.route('/auth').put(_controllers.LoginAuth).post(_controllers.RegisterAuth);
router.route('/account').post(_index.isValid, _index.isAdmin, _controllers.PutAccount).put(_index.isValid, _index.isAdmin, _controllers.PutPassword);
router.route('/check/password').put(_index.isValid, _index.isAdmin, _controllers.CheckPassword);
module.exports = router;