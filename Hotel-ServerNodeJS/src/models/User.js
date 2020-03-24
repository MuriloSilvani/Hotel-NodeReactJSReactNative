const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    ativo: Boolean
});

module.exports = mongoose.model('User', UserSchema);