var mongoose = require('mongoose');


var ServiceSchema = new mongoose.Schema({
    title: String,
    path: String,
    description: String,
    img: String,
    isActive: {
        type: String,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Service', ServiceSchema);