const mongoose = require('mongoose');
const { Schema } = mongoose;

const albumSchema = new Schema({
    userId: {type: String, required: true},
    name: {type: String, unique: true, required: true},
}, {timestamps: true});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;  