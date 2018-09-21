let AccountController = {
    account: function(req, res) {
        console.log(req.user);
        return res.send('accountpage');
    },
}
module.exports = AccountController;