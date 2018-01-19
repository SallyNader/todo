const mongoose = require('mongoose'),
      Schema  =mongoose.Schema;

const TaskSchema = mongoose.Schema({
        author: {
            type: Schema.Types.ObjectId, ref: "User"
        },  
        taskName: { 
           type: String,
           required: true
        },
        date: {
            type: Date,
            default: Date.now,
        },
        priority: {
            type: Number,
            default:5
        }
      });

const Task = mongoose.model('Task',TaskSchema);
module.exports = Task;