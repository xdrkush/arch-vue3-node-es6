/*
 * Model de 'Article'
 ******************************/

// Import de Mongoose
import mongoose from 'mongoose'
const { Schema } = mongoose

const MonitSchema = new Schema({
    landing: {
        type: Boolean,
        default: true
    },
    theme: {
        type: Boolean,
        default: {
            color: {
                primary: String,
                default: '#000000'
            }
        }
    },
})

module.exports = mongoose.model('Monit', MonitSchema)