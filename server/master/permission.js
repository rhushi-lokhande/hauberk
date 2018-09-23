var Permission = require('../model/permission.model');
module.exports =  async function  addPermission(){
    var permissionSet=[
        {title:'addUser'}, 
        {title:'addRole'}
    ]
    await Permission.insertMany(permissionSet,(err,data)=>{
        
    })
}