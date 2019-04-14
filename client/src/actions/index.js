import { AUTH_USER, AUTH_ERROR } from './types'
import axios from 'axios'

export const signup = (formProps, callback) => async dispatch  => {
    try{
        const response = await axios.post(`http://localhost:3090/signup`, formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token })
        localStorage.setItem('token', response.data.token)
        callback();
    }catch (error){
        dispatch({ type: AUTH_ERROR, payload: `${formProps.email} is in use` })
    }
}


export const signout = () => {
    localStorage.removeItem('token')

    return{
        type : AUTH_USER,
        payload : '' 
    }
}