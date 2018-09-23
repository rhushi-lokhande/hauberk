const Role = require('../../model/role.model');
const mongoose = require('mongoose');

let RoleController = {
    getRole: function (req, res) {
        Role.find({
            isActive: true,
            organization: req.user.organization
        }).populate('permission').exec({
            isActive: 1,
            title: 1,
            permission: 1
        }, (err, data) => {
            if (err) {
                return res.send(err);
            }
            return res.send(data);
        })
    },
    addRole: async function (req, res) {

        let role = await Role.findOne({
            title: req.body.title,
            organization: new mongoose.Types.ObjectId(req.user.organization),
            isActive: true
        }).exec();

        if (role) {
            return res.status(409).send('Role already exist');
        }

        role = new Role({
            title: req.body.title,
            permission: req.body.permission,
            organization: req.user.organization
        });

        role.save((err, data) => {
            if (err) {
                return res.send(err);
            }
            return res.send(data);
        });
    }
}
module.exports = RoleController;