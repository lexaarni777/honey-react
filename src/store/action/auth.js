import axios from 'axios'
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionType'


export function auth(email, password, isLogin){
    return async dispatch => {
            const authData = {
            email,
            password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA4Q5_de3gsjL9Y9cQPOArEqm-n7v7hcN8'

        if(isLogin){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA4Q5_de3gsjL9Y9cQPOArEqm-n7v7hcN8'
        }
        const response = await axios.post(url, authData)

        const data = response.data

        console.log(data)

        const expirationDate = new Date(new Date().getTime() + data.expiresIn *1000)

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expirationDate', expirationDate)

        dispatch(authSuccess(data.idToken))
        dispatch(autoLogout(data.expiresIn))
    }
}

export function autoLogout(time){
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout(){
    localStorage.remoneItem('token')
    localStorage.remoneItem('userId')
    localStorage.remoneItem('expirationDate')

    return {
        type: AUTH_LOGOUT
    }
}

export function authSuccess(token){
    return{
        type: AUTH_SUCCESS,
        token
    }
}