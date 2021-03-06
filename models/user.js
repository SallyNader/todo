const mongoose = require('mongoose'),
      bcrypt = require('bcryptjs'),
      Schema  =mongoose.Schema;

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tasks: [{type: Schema.Types.ObjectId, ref: "Task"}],
    favorites: [{type: Schema.Types.ObjectId, ref: "Favorite"}]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
}

module.exports.getUserByUsername = (username, callback) => {
    const query = {username: username};
    User.findOne(query, callback);
}

module.exports.addUser =  (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt , (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash,(err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}



