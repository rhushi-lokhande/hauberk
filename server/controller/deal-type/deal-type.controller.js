const DealType = require('../../model/deal-type.model');

let DealTypeController = {
    getDealType: function (req, res) {
        DealType.find({ isActive: true }, {
            title:1
        }, (err, data) => {
            if (err) {
                return res.send(err);
            }
            return res.send(data);
        })
    },
}
module.exports = DealTypeController;