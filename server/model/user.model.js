var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    email: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    bio: String,
    image: String,
    hash: String,
    salt: String,
    profileImage: String,
    google: {
        id: String,
        token: String,
        email: String,
    }
}, { timestamps: true });

UserSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

module.exports = mongoose.model('User', UserSchema);