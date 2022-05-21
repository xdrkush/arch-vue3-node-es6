/*
 * Model de 'Section'
 ******************************/

// Import de Mongoose
import mongoose from 'mongoose'
const { Schema } = mongoose

const SectionSchema = new Schema({
    type: {
        type: String,
        default: "default",
        required: true
    },
    page: {
        type: String,
        required: true,
        default: "home",
    },
    placement: {
        type: Number,
        required: true,
        default: "0",
    },
    name: {
        type: String,
        default: "defaultName",
        required: true
    },
    title: {
        type: String,
        default: "defaultTitle",
        required: true
    },
    description: {
        type: String,
        default: "defaultDescription",
        required: true
    },
    arch: {
        type: Object,
        default: {
            title: "Title Default",
            description: "Desctiption default, ..."
        }
    },
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

SectionSchema.pre('findOneAndUpdate', async function () {
    this.updated = Date.now()
})
SectionSchema.pre('save', async function () {
    this.updated = Date.now()
})
SectionSchema.pre('updateOne', async function () {
    this.updated = Date.now()
})


module.exports = mongoose.model('Section', SectionSchema)