import { AuthApi } from "../api/api"


const AUTH_USER = 'AUTH_USER'

let InitialState = {
    email : null,
    id : null,
    login : null,
    isAuth : false
}

const authReducer = (state = InitialState, action) =>{
    switch (action.type) {
        case AUTH_USER:
            return {...state, ...action.data, isAuth : true}
        default:
            return state
    }
}

export const authUser = (id,  email, login) => ({type : AUTH_USER, data : {id, email, login}})


export const authUserThunk = () => (dispatch) => 
        AuthApi.LogIn().then(account => {  
        if (account.resultCode === 0){
            let {id, login, email} = account.data
            dispatch(authUser(id,  email, login))   
        } 
        })

export default authReducer