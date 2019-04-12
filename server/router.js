const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')

//when a user is authenticated do not try to make a cookie based session
//we are using tokens
const requireAuth = passport.authenticate('jwt', {session: false})
const requireSignin = passport.authenticate('local', {session: false})


module.exports = function(app){
    //any request coming in, must pass our requireAuth function and then it can proceed to the request handler
    app.get('/', requireAuth, function(req, res){
        res.send({hi : 'there'})
    })
    //authenticate this user before they hit this route handler
    app.post('/signin', requireSignin, Authentication.signin)
    app.post('/signup', Authentication.signup)
}


 