const express = require('express'),
      router = express.Router(),
      Favorite = require('../models/Favorite');

router.route('/')
    .get((req, res, next) => {
        Favorite.find({}, (err, favorites) => {
            if(err)
                console.log(err);
            else
                console.log(favorites);    
        });
    })
    .post((req, res, next) => {
        let favoriteData = {
            author: req.body.author,
            taskId: req.body.taskId
        }
        let newFevorite = new Favorite(favoriteData);
        newFevorite.save((err, favorite) => {
            if(err) 
                console.log(err);
            else
                res.json(favorite);
        });
    });

module.exports = router;
