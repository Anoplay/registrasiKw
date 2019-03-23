import { AUTH_LOGIN, AUTH_LOGOUT } from '../actions/type';
const initialState = {
    auth:{
        token : null,
        isAuth : false
    }
        
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
               auth:{token:action.payload, isAuth:true}
            }
        case AUTH_LOGOUT:
            return {
                auth:{token:null, isAuth:false}
            }
        default:
            return state
    }
}