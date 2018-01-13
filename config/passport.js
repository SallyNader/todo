var passport = require('passport');

module.exports = function(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        done(null,user);
    });

    passport.deserializeUser((userId, done) => {
        done(null, user);
    });

    require('./strategies/local.strategy')();
};