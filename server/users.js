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
    const username = req.body.username,
          password = req.body.password;
    
    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user) {
            res.json({success: false, msg: "user not found"});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(user, "yoursecret", {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true,
                    token: 'JWT' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            }else {
                res.json({success: false, msg: "wrong password"});            
            }
        });
    });     

}); 

router.get('/profile', (req, res, next) => {
    res.send("profile");
});


module.exports = router;