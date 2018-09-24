const User = require('../../model/user.model');
const mongoose = require('mongoose');

let UserController = {
    addUser: async function (req, res) {
        let user = await User.findOne({ 'email': req.body.email }).exec();
        if (user) {
            return res.send('This email is already registered');
        }


        let newUser = new User();
        newUser.first_name = req.body.firstName;
        newUser.last_name = req.body.lastName;
        newUser.phone = req.body.phoneNo;
        newUser.email = req.body.email;
        newUser.organization = req.user.organization;
        newUser.role = req.body.roles;
        newUser.setPassword((Buffer.from(req.body.password, 'base64').toString()));
        newUser.save(err => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            return res.send({ msg: 'User added successfully' });
        });
    },

    getUser: function (req, res) {
        User.find({
            is_owner: false,
            organization: req.user.organization
        }).populate('role').exec({
            first_name: 1,
            last_name: 1,
            phone: 1,
            email: 1,
            role: 1,
            createdAt: 1,
            is_owner:1
        }, (err, data) => {
            if (err) {
                return res.send(err);
            }
            return res.send(data);
        })
    },
    getCurrentUser: function (req, res) {
        User.findById(req.user._id).populate('role').select({
            first_name: 1,
            last_name: 1,
            phone: 1,
            email: 1,
            role: 1,
            createdAt: 1,
            is_owner:1
        }).exec((err, data) => {
            if (err) {
                return res.send(err);
            }
            return res.send(data);
        })
    }
}
module.exports = UserController;