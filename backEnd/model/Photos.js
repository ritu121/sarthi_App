const mongoose = require('mongoose');
const { Schema } = mongoose;

const photoSchema = new Schema({
    albumId: {type: String, required: true},
    userId: {type: String, required: true},
    name: {type: String},
    img: {type: String},
}, {timestamps: true});        

const Photos = mongoose.model('Photo', photoSchema);

module.exports = Photos;         