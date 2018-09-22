var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');

var OrganizationSchema = new mongoose.Schema({
    org_name: String,
    address: String,
    phone: Number,
    email: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    image: String,
    is_verified: { type: Boolean, default: false }
}, { timestamps: true });



OrganizationSchema.plugin(uniqueValidator, { message: 'is already taken.' });

module.exports = mongoose.model('Organization', OrganizationSchema);