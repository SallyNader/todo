const express = require('express'),
      router = express.Router(),
      Favorite = require('../models/Favorite'),
      GetUserData = require('../server/users');

router.route('/')
    .get((req, res, next) => {
        Favorite.find({'author': GetUserData.userData._id }, (err, favorites) => {
            if(err)
                console.log(err);
            else
                res.json(favorites);    
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

    router.route('/:id')
        .delete((req, res, next) => {
            Favorite.remove({taskId: req.params.id}, (err, result) => {
                if(err)
                    console.log(err);
                else
                    res.json({msg: "done"});
            });
        });

module.exports = router;
