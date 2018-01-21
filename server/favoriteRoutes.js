const express = require('express'),
      router = express.Router(),
      Favorite = require('../models/Favorite');

router.route('/')
    .get((req, res, next) => {
        res.json({msg: "done"});
    })
    .post((req, res, next) => {
        let favorite = {
            author: req.body.author,
            taskId: req.body.taskId
        }
    });      

module.exports = router;
