import { AUTH_USER } from '../action/types'

 const INITAL_STATE = {
    authenicated: '',
    errorMessage: ''
}

export default function(state = INITAL_STATE, action){
    switch (action.type){
        case AUTH_USER:
            return {...state, authenticated : action.payload}
        default:
            return state;
        }
    
    
}