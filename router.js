const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')

//when a user is authenticated do not try to make a cookie based session
//we are using tokens
const requireAuth = passport.authenticate('jwt', {session: false})

module.exports = function(app){
    //any request coming in, must pass our requireAuth function and then it can proceed to the request handler
    app.get('/', requireAuth, function(req, res){
        res.send({hi : 'there'})
    })
    app.post('/signup', Authentication.signup)
}


 