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
        required: true,
        unique: true,
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    nameCompany: {
        type: String,
        default: "DAVROOT"
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
    resetPasswordToken: {
        type: String,
        default: ""
    },
    resetPasswordExpires: {
        type: String,
        default: ""
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

UserSchema.pre('save', function (next) {
    const user = this
    // eslint-disable-next-line handle-callback-err
    bcrypt.hash(user.password, 10, (err, encrypted) => {
        user.password = encrypted
        next()
    })
})

UserSchema.pre('findOneAndUpdate', async function () {
    this.updated = Date.now()
})
UserSchema.pre('save', async function () {
    this.updated = Date.now()
})
UserSchema.pre('updateOne', async function () {
    this.updated = Date.now()
})

module.exports = mongoose.model('User', UserSchema)