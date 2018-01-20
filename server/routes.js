var express = require('express'),
    router = express.Router(),
    Task = require('../models/Task'),
    User = require("../models/user");

router.route('/')
    .post((req, res, next) => {
        let items = {
            author: req.body.author,
            taskName: req.body.taskName,
            date: req.body.date,
            priority: req.body.priority
        }
        let  newTask = new Task(items);
        newTask.save((err, task) => {
            if(err)
                console.log(err);
            else
                {
                    res.json(task);
                    User.findByIdAndUpdate(items.author,
                    {"$push": {"tasks": newTask._id}},
                    {"new": true, "upsert": true},
                    (err, user) => {
                        if(err) throw err;
                        console.log(user);                        
                    });

                }
        });

    });  

router.route("/:id")
    .delete((req, res) => {
        Task.remove({_id: req.params.id}, (err, result) => {
            if(err)
                res.json(err);
            else
                res.json(result);
        });
    })
    .get((req, res, next) => {
        Task.findById(req.params.id, (err, task) => {
            res.json(task);
        });
    })
    .put((req, res) => {
        Task.findOne({_id: req.params.id}, (err, task) => {
            if(err)
                console.log(err);
            else {                
                task.taskName = req.body.taskName;
                task.date = req.body.date;
                task.priority = req.body.priority;
                task.save((err, task) => {
                    if(!err)
                        res.json(task);
                });               
            }    
        });
    });
module.exports =router; 