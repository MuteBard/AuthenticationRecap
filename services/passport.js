// passport is what's going to help us authenticate a user when they attempt to visit
// a route that requires authentication.

const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//Setup options for JWT Strategy, Strategies are ways we can accomplish our goal with passport
const jwtOptions = {
    //we are telling JWT that whenever a request comes in, and that we want passport to handle it
    //it has to look at the request header to find the token
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret

}

//Create JWT strategy
//payload is the decoded jwt token ({sub:-,iat})
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    // See if the user ID in the payload exists in our database
    // if it does, call done with user
    // or call done without user object 
    User.findById(payload.sub, function(err, user){
        if (err){ return done(err, false);}

        if (user){
            done(null,user);
        }else{
            done(null,false)
        }
    })
})

passport.use(jwtLogin)