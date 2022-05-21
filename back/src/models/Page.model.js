/*
 * Model de 'Page'
 ******************************/

// Import de Mongoose
import mongoose from 'mongoose'
const { Schema } = mongoose

const PageSchema = new Schema({
    name: {
        type: String,
        default: "",
        required: true
    },
    icon: {
        type: String,
        default: "",
        required: true
    },
    title: {
        type: String,
        default: "",
        required: true
    },
    description: {
        type: String,
        default: "",
        required: true
    },
    section: [{
        type: Object,
        default: {}
    }],
    isArchived: {
        type: Boolean,
        default: false,
    },
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    }
})

PageSchema.pre('findOneAndUpdate', async function () {
    this.updated = Date.now()
})
PageSchema.pre('save', async function () {
    this.updated = Date.now()
})
PageSchema.pre('updateOne', async function () {
    this.updated = Date.now()
})


module.exports = mongoose.model('Page', PageSchema)