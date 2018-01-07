const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/todo");
mongoose.connection.on('connected', () => {
    console.log("Connected To MongoDB Successfully");
});
mongoose.connection.on('error', (err) => {
    if(err)
        console.log('Error : ' +err);
});
module.exports = mongoose;