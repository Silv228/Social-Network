import { AuthApi } from "../api/api"

const AUTH_USER = 'AUTH_USER'
const STOP_SUBMIT = 'STOP_SUBMIT'
const SET_CAPTCHA = 'SET_CAPTCHA'

let InitialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    error: null,
    captcha: null
}

const authReducer = (state = InitialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, ...action.data }
        case STOP_SUBMIT:
            return { ...state, error: action.error }
        case SET_CAPTCHA:
            return { ...state, captcha: action.captcha }
        default:
            return state
    }
}
//Action Creators
export const authUser = (id, email, login, isAuth) => ({ type: AUTH_USER, data: { id, email, login, isAuth } })
export const stopSubmit = (error) => ({ type: STOP_SUBMIT, error })
export const setCaptcha = (captcha) => ({ type: SET_CAPTCHA, captcha })

//Thunk Creators
export const authUserThunk = () => async (dispatch) => {
    const account = await AuthApi.auth()
    if (account.resultCode === 0) {
        let { id, login, email } = account.data
        dispatch(authUser(id, email, login, true))
    }
}
export const getCaptcha = () => async (dispatch) => {
    const response = await AuthApi.getCaptcha()
    dispatch(setCaptcha(response.url))
}
export const logIn = (login, password, rememberMe, captcha) => async (dispatch) => {
    const response = await AuthApi.logIn(login, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(authUserThunk())
        dispatch(setCaptcha(null))
    }
    if (response.resultCode === 10) {
        dispatch(getCaptcha())
        dispatch(stopSubmit(response.messages[0]))
    }
    else {
        dispatch(stopSubmit(response.messages[0]))  
    }
}
export const logOut = () => async (dispatch) => {
    const response = await AuthApi.logOut()
    if (response.resultCode === 0) {
        dispatch(authUser(null, null, null, false))
    }
}

export default authReducer