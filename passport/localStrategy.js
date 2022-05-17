const passport = require('passport');
const LocalStrategy = require('passport-local');
const { User } = require('../models/index');
// const crypto = require('crypto');

module.exports = () => passport.use(new LocalStrategy(
    {
        usernameField: 'userId',
        passwordField: 'password'
    },
    async function verify(username, password, cb) {
        const loginId = await User.findAll({
            attributes: [ 'userId', 'password' ],
            where: { userId: username }
        });
        if(loginId.length) {
            const { userId: dbUserId, password: dbPassword } = loginId[0].dataValues;
            // if (err) { return cb(err); }
            if (username !== dbUserId || password !== dbPassword) {             
                return cb(null, false, { message: 'Incorrect username or password.' });            
            }
            return cb(null, dbUserId);
            
            // crypto.pbkdf2(password, userId, 310000, 32, 'sha256', function(err, hashedPassword) {
            //     if (err) { return cb(err); }
            //     if (!crypto.timingSafeEqual(userId.hashed_password, hashedPassword)) {
            //     return cb(null, false, { message: 'Incorrect username or password.' });
            // }
            // return cb(null, userId);
            // });
            }
        return cb(null, false, { message: 'Incorrect username or password.' });
    }
));