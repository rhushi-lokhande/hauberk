let passport = require('passport');
const User = require('../../model/user.model');
const Organization = require('../../model/organization.model');

let loginController = {
    isUserLogin: async function (req, res) {
        if (req.isAuthenticated()) {
            let organization = await Organization.findById(req.user.organization).exec();
            return res.send({
                isVerified: organization.is_verified,
            });
        }
        return res.send({ isLogin: false });
    },
    googleLogin: function (req, res) {
        return passport.authenticate('google', { scope: ['profile', 'email'] });
    },
    googleResponce: function () {
        console.log('gooogle calback')
        return passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/dashboard' });
    },
    signUp: async function (req, res) {
        console.log(req.body)
        let organization = await Organization.findOne({ 'org_name': req.body.orgName }).exec();
        if (organization) {
            return res.send('This organization is already registered');
        }

        let user = await User.findOne({ 'email': req.body.email }).exec();
        if (user) {
            return res.send('This email is already registered');
        }

        let newOrganization = new Organization({
            org_name: req.body.orgName,
            email: req.body.orgEmail
        });

        newOrganization.save((err, _newOrganization) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }


            console.log(_newOrganization)

            let newUser = new User();
            newUser.first_name = req.body.firstName;
            newUser.last_name = req.body.lastName;
            newUser.phone = req.body.phoneNo;
            newUser.email = req.body.email;
            newUser.organization = _newOrganization;
            newUser.is_owner = true;
            newUser.setPassword((Buffer.from(req.body.password, 'base64').toString()));
            newUser.save(err => {
                if (err) {
                    console.log(err);
                    return res.send(err);
                }
                return res.redirect(`./login?username=${req.body.email}&password=${req.body.password}`)
            });
        });
    },
    login: function (req, res) {
        return passport.authenticate('local', { failureRedirect: '/auth/redirecto?msg=Invalid username and password', successRedirect: '/auth/redirecto?url=dashboard' });
    },
    logout: function (req, res) {
        req.logout();
        return res.status(302).send({ url: '/' });
    },
    redirecto: function (req, res) {

        if (!req.query.url) {
            return res.status(req.query.statusCode || 200).send({ msg: req.query.msg });
        }

        return res.status(302).send({ url: req.query.url });
    },
}
module.exports = loginController;