/*
 * Model de 'Article'
 ******************************/

// Import de Mongoose
import mongoose from 'mongoose'
import bcrypt from 'bcrypt';
const { Schema } = mongoose

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
        type: String,
        required: true
    },
    firstname: {
        type: String,
        default: ""
    },
    lastname: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    siret: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        default: ""
    },
    social: {
        type: Object,
        default: {
            facebook: "user",
            twitter: "@user",
            youtube: "user"
        }
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

UserSchema.pre('save', function (next) {
    const user = this
    // eslint-disable-next-line handle-callback-err
    bcrypt.hash(user.password, 10, (err, encrypted) => {
        user.password = encrypted
        next()
    })
})


module.exports = mongoose.model('User', UserSchema)