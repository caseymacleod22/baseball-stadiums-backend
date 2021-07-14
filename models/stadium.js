const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stadiumSchema = new Schema({
    // stadium: String,
    location: String,
}, {timestamps: true})

module.exports = mongoose.model('Stadium', stadiumSchema)