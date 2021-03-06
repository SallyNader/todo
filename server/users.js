const express = require('express'),
      cors = require('cors'),
      router = express.Router(),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      User = require('../models/user');

router.post('/register',cors(), (req, res, next) => {
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
    const username = req.body.username;
    const password = req.body.password;
  
    User.getUserByUsername(username, (err, user) => {
      if(err) throw err;
      if(!user){
        return res.json({success: false, msg: 'User not found'});
      }
      const userData = user;
      module.exports.userData = userData;
      User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          const token = jwt.sign({data: user}, "yoursecret", {
            expiresIn: 604800 // 1 week
          });
        
          res.json({
            success: true,
            token: `Bearer ${token}`,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email
            }
          });
        } else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
  });
  
//to protect our route
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});

router.route('/tasks/:userId')
    //get all tasks that belogs to one user
    .get((req,res,next) => {
        var userID =  req.params.userId;
        User.
          findOne({_id: userID}).
          populate('tasks').
          exec((err, user) => {
              if(err) throw err;
              res.json(user);
          });
    });  


module.exports = router;