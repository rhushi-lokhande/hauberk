const permissionData = require('./permission');
const DealTypeData = require('./deal-type');
module.exports  = function addData(){
    permissionData();
    DealTypeData();
}