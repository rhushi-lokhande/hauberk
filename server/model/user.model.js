var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    phone: Number,
    email: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    organization: { type: Schema.Types.ObjectId, ref: 'Organization' , required:true},
    role: [{ type: Schema.Types.ObjectId, ref: 'Role' }],
    image: String,
    hash: String,
    salt: String,
    profileImage: String,
    is_owner: { type: Boolean, default: false },
    google: {
        id: String,
        token: String,
        email: String,
    }
}, { timestamps: true });

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha256').toString('hex');
};

UserSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha256').toString('hex');
    return this.hash === hash;
};

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

module.exports = mongoose.model('User', UserSchema);