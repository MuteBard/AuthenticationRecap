const mongoose = require('mongoose')
// Schema is what we use to tell mongoose about the very particular
// fields that our model is going to have. a model creator
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

// Create and Define our schema, enforcing uniqueness and lowercase
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase : true},
    password: String
})

//On Save Hook, encrypt password

// before the model gets saved, run this function. This is a hook.
userSchema.pre('save', function(next){
    //the context of this 'this' is the userModel, getting access to the user model
    const user = this
    //generate a salt, then run callback
    bcrypt.genSalt(10, function(err, salt){
        if (err) { return next(err) }
        //encrypt our password using salt
        bcrypt.hash(user.password, salt, null, function(err, hash){
            if (err) {return next(err)}
            //overwrite plain text password with encrypted
            user.password = hash;
            //go ahead and save the model
            next();
        })
    })
})

// methods property where we can define our own functions
userSchema.methods.comparePassword = function(canidatePassword, callback){
    bcrypt.compare(canidatePassword, this.password, function(err, isMatch){
        if (err) { return callback(err) }
        callback(null, isMatch)
    })
}

// Load the userSchema which corresponds to a collection called 'user' into mongoose and create the model class 
const modelClass = mongoose.model('user', userSchema)

// Export the model
module.exports = modelClass