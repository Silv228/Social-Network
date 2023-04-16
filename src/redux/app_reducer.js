import { authUserThunk } from "./auth_reducer"

const INIT = 'INIT'


const InitialState = {
    init : false
}

const appReducer = (state = InitialState, action) =>{
    switch (action.type) {
        case INIT:
            return{
                ...state, 
                init : true
            }
        default:
            return state
    }
}

export const initalSuccess = () => ({type : 'INIT'})

export const initial = () => (dispatch) =>{
    const promise = dispatch(authUserThunk())
    Promise.all([promise]).then(() => {
        dispatch(initalSuccess())
    })
    
}

export default appReducer
