const mongoose = require('mongoose')
// Schema is what we use to tell mongoose about the very particular
// fields that our model is going to have. a model creator
const Schema = mongoose.Schema;

// Create and Define our schema, enforcing uniqueness and lowercase
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase : true},
    password: String
})

// Load the userSchema which corresponds to a collection called 'user' into mongoose and create the model class 
const modelClass = mongoose.model('user', userSchema)

// Export the model
module.exports = modelClass