const mongoose = require('mongoose')
const { Schema, model } = mongoose

const bookSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: String,
    editorial: String,
    anio: Number
}, {
    versionKey: false,
    timestamps: true
})

const BookModel = model('Books', bookSchema)

module.exports = BookModel