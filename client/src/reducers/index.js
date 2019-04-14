import { combineReducers } from 'redux'
//renaming an import statement, we dont want to keep
// ambiguious name reducer, want it named something more
// definite
import { reducer as formReducer } from 'redux-form'
import auth from  './auth'

export default combineReducers({
    auth,
    form : formReducer
});