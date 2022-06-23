/*
 * Model de 'Session'
 ******************************/

// Import de Mongoose
import mongoose from 'mongoose'
const { Schema } = mongoose

const SessionSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId
    },
    token: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required: true
    },
    auth: {
        type: Boolean,
        default: false
    },
    validity: {
        type: Date,
    },
    device: {
        type: String,
    },
    loggedout: {
        type: Date
    },
    created: {
        type: Date,
        default: () => Date.now()
    },
    updated: {
        type: Date,
        default: () => Date.now()
    }
})

SessionSchema.pre('findOneAndUpdate', async function () {
    this.updated = Date.now()
})
SessionSchema.pre('save', async function () {
    this.updated = Date.now()
})
SessionSchema.pre('updateOne', async function () {
    this.updated = Date.now()
})

module.exports = mongoose.model('Session', SessionSchema)
