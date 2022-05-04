"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _JsonWebToken = _interopRequireDefault(require("./JsonWebToken"));

var _Header = require("./Header");

module.exports = {
  // JWT
  isValid: function isValid(req, res, next) {
    return new _JsonWebToken["default"]().isValid(req, res, next);
  },
  isProp: function isProp(req, res, next) {
    return new _JsonWebToken["default"]().isProp(req, res, next);
  },
  isAdmin: function isAdmin(req, res, next) {
    return new _JsonWebToken["default"]().isAdmin(req, res, next);
  },
  isRoot: function isRoot(req, res, next) {
    return new _JsonWebToken["default"]().isRoot(req, res, next);
  },
  tokenVisitor: _Header.tokenVisitor // XXX Middleware
  // CheckXXX: (req, res) => new XXXMiddleware().get,

};