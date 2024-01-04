import { AUTH_SUCCESS, AUTH_LOGOUT } from "../action/actionType"

const initialState = {
    token: null,
    userId: null,
    
}

export default function authRaducer(state = initialState, action){

    switch (action.type){
        case AUTH_SUCCESS:
            return{
                ...state, token: action.token, userId: action.userId
            }
        case AUTH_LOGOUT:
            return{
                ...state, token: null, userId: null
            }
        default:
            return state
    }
}