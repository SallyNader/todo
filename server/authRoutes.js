var express = require('express'),
    router = express.Router(); 

router.route('/')
    .post((req, res, next) => {       
       req.login(req.body, function() {
           res.redirect('/signup/profile');
       });
        res.json(req.body);
    })
    .get((req, res, next) => {
        res.json({"k":"hfd"});
    });
router.route('/profile')
    .get((req, res, next) => {
        res.json(req.user);
    });     

module.exports =router;  