// passport is what's going to help us authenticate a user when they attempt to visit
// a route that requires authentication.

const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local')

//Create a local strategy
//Local Strategy by default assumes that its gonna be passed a username and password
//we are not doing that, we are using emails. we are telling LocalStrategy if it needs something
// to satisfy the usernameField field, look at our email field


const localOptions = {usernameField: 'email'}
const localLogin = new LocalStrategy(localOptions, function(email, password, done){
    //Verify this username and password, call done with user
    //if it is the correct username and password
    //otherwise call done with false
    User.findOne({email: email }, function(err, user){
        if (err) { return done(err);}
        if (!user) { return done(null, false); }

        // compare passwords - is 'password' equal to user.password? remember bcrypt is in play
        user.comparePassword(password, function(err, isMatch){
            if (err) {return done(err)}
            if (!isMatch) {return done(null, false);}
            return done (null, user)
        })
    })
})

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

passport.use(jwtLogin);
passport.use(localLogin);