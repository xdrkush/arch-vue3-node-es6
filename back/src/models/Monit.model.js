/*
 * Model de 'Article'
 ******************************/

// Import de Mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MonitSchema = new Schema({
    landing: {
        type: Boolean,
        default: true
    },
})

module.exports = mongoose.model('Monit', MonitSchema)