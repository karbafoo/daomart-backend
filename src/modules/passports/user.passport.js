const {Strategy, ExtractJwt} = require('passport-jwt');
const {USER_SECRET} = require('../../../Config');
const {UserController} = require('../../controllers');

const UserJWTPassport = (passport) => {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.passReqToCallback = true;
    opts.secretOrKey = USER_SECRET;

    passport.use(
        'jwt.user',
        new Strategy(opts, function (req, jwt_payload, done) {
            console.log('user pass');
            return done(null, null, null);
            // UserController.getUserByAccountId(jwt_payload)
            //     .then((userDoc) => {
            //         return done(null, userDoc);
            //     })
            //     .catch((err) => {
            //         return done(null, null, err);
            //     });
        })
    );
};

module.exports = UserJWTPassport;
