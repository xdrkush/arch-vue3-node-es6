"use strict";

/*
 * Model de 'Article'
 ******************************/
// Import de Mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
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
module.exports = mongoose.model('Article', ArticleSchema);