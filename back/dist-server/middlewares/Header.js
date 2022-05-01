"use strict";

// TestMD
exports.token = function (req, res, next) {
  console.log('HEADER', req.headers);
  next();
};