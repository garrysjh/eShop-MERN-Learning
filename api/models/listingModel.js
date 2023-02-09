//import mongoose
const mongoose = require('mongoose')
//take function from mongoose
const Schema = mongoose.Schema
//define schema of item listing (structure of item)
const ListingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true})
//export the model created 
module.exports = mongoose.model('Listing', ListingSchema)