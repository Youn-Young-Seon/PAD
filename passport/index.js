const passport = require('passport');
const local = require('./localStrategy');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    
    passport.deserializeUser((id, done) => {
        done(null, id);
        // User.findOne({ where: { id } })
        //     .then(user => done(null, id))
        //     .catch(err => done(err));
    })

    local();
}