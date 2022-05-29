/*
 * Model de 'Page'
 ******************************/

// Import de Mongoose
import mongoose, { SchemaTypes } from 'mongoose';
const { Schema } = mongoose;

// Import Model for relation (populate)
import Section from './Section.model';

const PageSchema = new Schema({
    name: {
        type: String,
        default: "",
        required: true,
        unique: true
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
    sections: [{
        type: Schema.Types.ObjectId,
        ref: 'Section'
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