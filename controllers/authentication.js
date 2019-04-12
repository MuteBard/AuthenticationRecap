const User = require('../models/user')
const jwt = require('jwt-simple')
const config = require('../config')

function tokenForUser(user){
    //parameter 1 : stuff we want to encode
    //parameter 2 : secret we will use to encrypt it
    //Json web tokens have a sub property, meaning subject, who is this token about?
    //Json web tokens have a iat property, meaning issued at time
    const timestamp = new Date().getTime(); 
    return jwt.encode({ sub: user.id, iat: timestamp}, config.secret);
}


exports.signup = function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password){
        return res.status(422).send({error : "Need to provide a username or password"})
    }
   // See if a user with a given email exists, a duplicate, after this search is completed, invoke a callback
    User.findOne({email: email}, function(err, existingUser){
        if (err){ return next(err)}
          //If a user with email does exist, return an error
        if (existingUser){
            //unprocessable entitiy
            return res.status(422).send({ error : 'Email is in use' })
        }

        const user = new User({
            email : email,
            password : password
        })

        user.save(function(err){
            if (err){ return next(err); }

            //respond to request indicating the user was created with a token
            res.json({token : tokenForUser(user)})
        });
   });
 

   //If a user with email does NOT exist, create and save user record

   //Respond to request indicating the user was created
}