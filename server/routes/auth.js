var express = require('express');
let router = express.Router();

let loginController = require('../controller/login/login.controller');
router.get('/google', loginController.googleLogin());
router.get('/google/callback', loginController.googleResponce());
router.get('/isUserLogin', loginController.isUserLogin);
router.post('/signup', loginController.signUp);
router.get('/login', loginController.login());
router.get('/logout', loginController.logout);
router.get('/redirecto', loginController.redirecto);



module.exports = router