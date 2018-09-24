var mongoose = require('mongoose');


var DealTypeSchema = new mongoose.Schema({
    title: { type: String, lowercase: true, unique:true},
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });



module.exports = mongoose.model('DealType', DealTypeSchema);