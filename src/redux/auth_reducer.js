import { stopSubmit } from "redux-form"
import { AuthApi } from "../api/api"

const AUTH_USER = 'AUTH_USER'

let InitialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

const authReducer = (state = InitialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, ...action.data }
        default:
            return state
    }
}
//Action Creators
export const authUser = (id, email, login, isAuth) => ({ type: AUTH_USER, data: { id, email, login, isAuth } })

//Thunk Creators
export const authUserThunk = () => async (dispatch) => {
    const account = await AuthApi.auth()
    if (account.resultCode === 0) {
        let { id, login, email } = account.data
        dispatch(authUser(id, email, login, true))
    }
}
export const logIn = (login, password, rememberMe, captcha) => async (dispatch) => {
    const response = await AuthApi.logIn(login, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(authUserThunk())
    }
    else {
        dispatch(stopSubmit('login', { _error: response.messages[0] }))
    }
}
export const logOut = () => async (dispatch) => {
    const response = await AuthApi.logOut()
        if (response.resultCode === 0) {
            dispatch(authUser(null, null, null, false))
        }
}
export default authReducer