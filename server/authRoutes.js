var express = require('express'),
    authRouter = express.Router(),
    mongoose = require('mongoose');

    

var router = function(){
    authRouter.route('signUp')
        .post((req, res) => {
            console.log(req.body);
        });
    return authRouter;    
}

module.exports = router;