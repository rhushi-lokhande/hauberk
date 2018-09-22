let passport = require('passport');
const User = require('../../model/user.model');
const Organization = require('../../model/organization.model');

let loginController = {
    isUserLogin: function (req, res) {
        return res.send(req.isAuthenticated());
    },
    googleLogin: function (req, res) {
        return passport.authenticate('google', { scope: ['profile', 'email'] });
    },
    googleResponce: function () {
        console.log('gooogle calback')
        return passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/dashboard' });
    },
    signUp: async function (req, res) {
        let organization = await Organization.findOne({ 'org_name': req.body.orgName }).exec();
        if (organization) {
            return res.send('This organization is already registered');
        }

        let user = await User.findOne({ 'email': req.body.email }).exec();
        if (user) {
            return res.send('This email is already registered');
        }

        let newOrganization = new Organization();

        newOrganization.org_name = req.body.org_name;
        newOrganization.email = req.body.orgEmail;

        newOrganization = await newOrganization.save(err => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
        });

        let newUser = new User();
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;
        newUser.phone = req.body.phoneNo;
        newUser.email = req.body.email;
        newUser.organization = newOrganization;
        newUser.is_owner = true;
        console.log('decypt pass: ', (Buffer.from(req.body.password, 'base64').toString()));
        newUser.setPassword((Buffer.from(req.body.password, 'base64').toString()));
        await newUser.save(err => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            return res.redirect(`./login?username=${req.body.email}&password=${req.body.password}`)
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