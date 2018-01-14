var passport = require('passport');

module.exports = function(app) {   

    passport.serializeUser((user, done) => {
        done(null,user);
    });

    passport.deserializeUser((userId, done) => {
        done(null, user);
    });

    require('./strategies/local.strategy')();
};