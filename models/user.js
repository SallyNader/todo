const mongoose = require('mongoose'),
      bcrypt = require('bcryptjs');

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
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = {
    User: User,
    getUserById: (id, callback) => {
        User.findById(id, callback);
    },
    getUserByUsername: (username, callback) => {
        const query = {username: username};
        User.findOne(query, callback);
    },
    addUser: (newUser, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt , (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save(callback);
            });
        });
    }
}


