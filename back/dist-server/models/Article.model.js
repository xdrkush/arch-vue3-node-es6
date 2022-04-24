"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

/*
 * Model de 'Article'
 ******************************/
// Import de Mongoose
var Schema = _mongoose["default"].Schema;
var ArticleSchema = new Schema({
  title: {
    type: String,
    "default": "J'ai oublie le titre"
  },
  description: {
    type: String,
    "default": "J'ai oublie la description"
  }
});
module.exports = _mongoose["default"].model('Article', ArticleSchema);