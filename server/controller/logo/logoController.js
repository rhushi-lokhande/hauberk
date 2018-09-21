const logoForm = require('../../model/logoForm.model');

let logoController = {
    save: function (req, res) {
        let form = new logoForm();
        form.logoTitle = req.body.logoTitle,
            form.logoCaption = req.body.logoCaption,
            form.logoDescription = req.body.logoDescription,
            form.save(err => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                return done(null, logoForm);
            });
    }
}