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
                primary: "#2F1F34",
                secondary: "#26A69A",
                accent: "#9C27B0",
                dark: "#1D1D1D",
                light: "#bde8e3",
                positive: "#21BA45",
                negative: "#C10015",
                info: "#31CCEC",
                warning: "#F2C037",
                custom: "#1976D2"
            },
            icon: {
                name: '',
                path: ''
            }
        }
    },
})

module.exports = mongoose.model('Monit', MonitSchema)