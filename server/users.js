const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      User = require('../models/user');

router.post('/register', (req, res, next) => {
    let user = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    };
    let newUser = new User(user);
    User.addUser(newUser, (err, user) => {
        if(err)
            res.json({success: false, msg: "failed to register user"});
        else  
            res.json({success: true, msg: "done register user"});
        
    });
});     

router.post('/authenticate', (req, res, next) => {
    res.send("authenticate");
}); 

router.get('/profile', (req, res, next) => {
    res.send("profile");
});


module.exports = router;