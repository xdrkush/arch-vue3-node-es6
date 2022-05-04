"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

/*
 * Model de 'Article'
 ******************************/
// Import de Mongoose
var Schema = _mongoose["default"].Schema;
var MonitSchema = new Schema({
  landing: {
    type: Boolean,
    "default": true
  },
  theme: {
    type: Object,
    "default": {
      color: {
        primary: String,
        "default": '#000000'
      }
    }
  }
});
module.exports = _mongoose["default"].model('Monit', MonitSchema);