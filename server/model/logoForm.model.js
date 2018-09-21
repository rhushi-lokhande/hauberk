var mongoose = require('mongoose');


var LogoFormSchema = new mongoose.Schema({
    title: String,
    caption: String,
    description: String,
}, { timestamps: true });

module.exports = mongoose.model('LogoForm', LogoFormSchema);