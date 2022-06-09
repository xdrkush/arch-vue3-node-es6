/*
 * Model de 'Monit'
 ******************************/

// Import de Mongoose
import mongoose from 'mongoose'
const { Schema } = mongoose

const MonitSchema = new Schema({
    actived: {
        type: Boolean,
        default: true
    },
    limited: {
        type: Boolean,
        default: true
    },
    landing: {
        type: Boolean,
        default: true
    },
    theme: {
        type: Object,
        default: {
            color: {
                primary : "#461075",
                secondary : "#228f5e",
                accent : "#93b827",
                dark : "#39434a",
                light : "#0ec9b4",
                positive : "#49cc68",
                negative : "#ad3947",
                info : "#189fba",
                warning : "#ba9223",
                custom : "#1976D2"
            },
            icon: {
                name: '',
                path: ''
            }
        }
    },
})

module.exports = mongoose.model('Monit', MonitSchema)