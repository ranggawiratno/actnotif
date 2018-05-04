var express = require('express');
var router = express.Router();
//var User = require('../models/user');

//get register
router.get('/register', function(req, res){
    res.render('users/register');
});

//get login
router.get('/login', function(req, res){
    res.render('users/login');
});
module.exports = router;