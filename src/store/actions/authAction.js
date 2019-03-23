import { AUTH_LOGIN, AUTH_LOGOUT } from './type'
import axios from 'axios';

export const authLogin = (dataLogin) => async dispatch => {
    const res = await axios.post(`https://cors-anywhere.herokuapp.com/https://node-student.herokuapp.com/api/student/signin`, dataLogin)
    localStorage.setItem('token', res.data.token);
    dispatch({
        type: AUTH_LOGIN,
        payload: res.data.token
    })
}

export const authLogout = () => async dispatch => {
    dispatch({
        type: AUTH_LOGOUT
    })
}