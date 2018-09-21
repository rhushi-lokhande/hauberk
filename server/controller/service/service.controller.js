let passport = require('passport');
const Service = require('../../model/service.model');

let serviceController = {
    addService: function(req, res) {
        console.log(req.body);
        let newService = new Service();
        newService.title = req.body.title;
        newService.path = req.body.path;
        newService.description = req.body.description;
        newService.img = req.body.img;
        newService.save((err, service) => {
            if (err) {
                return res.send(err);
            }
            return res.send(service);
        });

    },
    getService: function(req, res) {
        Service.find({ isActive: true }, { title: 1, path: 1, description: 1, img: 1 },
            (err, services) => {
                if (err) {
                    return res.send(err);
                }
                return res.send(services);
            });
    }
}
module.exports = serviceController;