var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoleSchema = new Schema({
    title: String,
    organization: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
    permission: [{ type: Schema.Types.ObjectId, ref: 'Permission' }],
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });



module.exports = mongoose.model('Role', RoleSchema);