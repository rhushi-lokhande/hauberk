const Permission = require('../../model/permission.model');

let PermissionController = {
    getPermissions: function (req, res) {
        Permission.find({ isActive: true }, {
            isActive: 1,
            title:1
        }, (err, data) => {
            if (err) {
                return res.send(err);
            }
            return res.send(data);
        })
    },
}
module.exports = PermissionController;