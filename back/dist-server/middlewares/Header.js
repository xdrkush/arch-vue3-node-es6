"use strict";

// TestMD
exports.tokenVisitor = function (req, res, next) {
  if (req.headers["x-webapp"] === 'visitor') next();else res.status(403).send("Error !!!");
};