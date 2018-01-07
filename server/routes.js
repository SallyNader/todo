var express = require('express'),
    router = express.Router(),
    Task = require('../models/Task');

router.route('/')
    .get((req,res,next) => {
        Task.find((err, tasks) => {
            res.json(tasks);
        });
    })
    .post((req, res, next) => {
        let items = {
            taskName: req.body.taskName,
            date: req.body.date,
            priority: req.body.priority
        }
        let  newTask = new Task(items);
        newTask.save((err, task) => {
            if(err)
                console.log(err);
            else
                res.json(task);
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