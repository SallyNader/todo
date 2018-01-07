const mongoose = require('mongoose'),
      TaskSchema = mongoose.Schema({
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
const Task = mongoose.model('tasks',TaskSchema);
module.exports = Task;