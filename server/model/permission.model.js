var mongoose = require('mongoose');


var PermissionSchema = new mongoose.Schema({
    title: { type: String, lowercase: true, unique:true},
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });



module.exports = mongoose.model('Permission', PermissionSchema);