const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, unique: true, required: true},
    phoneNo: {type:Number}
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;