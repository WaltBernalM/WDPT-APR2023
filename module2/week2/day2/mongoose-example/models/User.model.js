// 1) importar mongoose
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 2, //Xi, Da
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    // Admin, User
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User'
    },
})
const userModel = mongoose.model('User', userSchema)

module.exports = userModel;