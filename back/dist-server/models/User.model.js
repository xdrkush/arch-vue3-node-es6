"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

/*
 * Model de 'Article'
 ******************************/
// Import de Mongoose
var Schema = _mongoose["default"].Schema;
var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    "default": ""
  },
  lastname: {
    type: String,
    "default": ""
  },
  description: {
    type: String,
    "default": ""
  },
  address: {
    type: String,
    "default": ""
  },
  siret: {
    type: String,
    "default": ""
  },
  phone: {
    type: String,
    "default": ""
  },
  social: {
    type: Object,
    "default": {
      facebook: "user",
      twitter: "@user",
      youtube: "user"
    }
  },
  isValid: {
    type: Boolean,
    "default": false
  },
  isProp: {
    type: Boolean,
    "default": false
  },
  isAdmin: {
    type: Boolean,
    "default": false
  },
  isRoot: {
    type: Boolean,
    "default": false
  },
  isBan: {
    type: Boolean,
    "default": false
  }
});
UserSchema.pre('save', function (next) {
  var user = this; // eslint-disable-next-line handle-callback-err

  _bcrypt["default"].hash(user.password, 10, function (err, encrypted) {
    user.password = encrypted;
    next();
  });
});
module.exports = _mongoose["default"].model('User', UserSchema);