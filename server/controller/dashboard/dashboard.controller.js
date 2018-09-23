const Organization = require('../../model/organization.model');

let DashboardController = {
    getDashboard: async function(req, res) {
        let dashboard={};
        dashboard.user={
           firstName: req.user.first_name,
           lastName: req.user.last_name,
           email:req.user.email,
           phoneNo:req.user.phone,
        }
        let organization = await Organization.findById(req.user.organization).exec();
        dashboard.organization = {
            orgName:organization.org_name,
            isVerified:organization.is_verified
        }
        res.send(dashboard);
    },
}
module.exports = DashboardController;