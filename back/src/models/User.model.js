/*
 * Model de 'Article'
 ******************************/

// Import de Mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    description: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    social: {
        type: Object,
    },
    isValid: {
        type: Boolean,
        default: false
    },
    isProp: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isRoot: {
        type: Boolean,
        default: false
    },
    isBan: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('User', UserSchema)