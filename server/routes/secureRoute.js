var express = require('express');
let router = express.Router();


let AccountController = require('../controller/account/account.controller');
router.get('/account', AccountController.account);


let ServiceController = require('../controller/service/service.controller');
router.post('/service', ServiceController.addService);
router.get('/service', ServiceController.getService);

// let LogoController = require('../controller/logo/logoController');
// router.post('/logoFormSave', LogoController.save);

let DashboardController = require('../controller/dashboard/dashboard.controller')
router.get('/dashboard', DashboardController.getDashboard);


let PermissionController = require('../controller/permission/permission.controller');
router.get('/permission', PermissionController.getPermissions);

let RoleController = require('../controller/role/role.controller');
router.get('/role', RoleController.getRole);
router.post('/role', RoleController.addRole);


let UserController = require('../controller/user/user.controller');
router.get('/user', UserController.getUser);
router.post('/user', UserController.addUser);
router.get('/current-user', UserController.getCurrentUser);

let DealTypeController = require('../controller/deal-type/deal-type.controller');
router.get('/deal-type', DealTypeController.getDealType);


module.exports = router