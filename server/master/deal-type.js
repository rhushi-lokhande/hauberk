var DealType = require('../model/deal-type.model');
module.exports =  async function  addPermission(){
    var DealTypeSet=[
        {title:'Commercial Sale'},
        {title:'Residential Sale'},
        {title:'Office Lease'},
        {title:'Retail Lease'},
        {title:'Financing'}
    ]
    await DealType.insertMany(DealTypeSet,(err,data)=>{
    })
}