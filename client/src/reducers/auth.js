import { AUTH_USER, AUTH_ERROR } from '../actions/types'

 const INITAL_STATE = {
    authenicated: '',
    errorMessage: ''
}

export default function(state = INITAL_STATE, action){
    switch (action.type){
        case AUTH_USER:
            return {...state, authenticated : action.payload};
        case AUTH_ERROR:
            return {...state, errorMessage: action.payload};
        default:
            return state;
        }
    
    
}