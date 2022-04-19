/*
 * Model de 'Article'
 ******************************/

// Import de Mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title: {
        type: String,
        default: "J'ai oublie le titre"
    },
    description: {
        type: String,
        default: "J'ai oublie la description"
    }
})

module.exports = mongoose.model('Article', ArticleSchema)