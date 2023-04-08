import { ProfileApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'
const SET_PROFILE = 'SET_PROFILE'
const UPDATE_STATUS = 'UPDATE_STATUS'
const SET_FETHING = 'SET_FETHING'

const InitialSate = {
    posts: [
        { likes: 12, message: "Hi, Hitler 1488" },
        { likes: 46, message: "I'm don't nacism" }
    ],
    newTextPost: '',
    isMyProfile : false,
    profile : null,
    status : null,
    isFetching : true
}

const profileReducer = (state = InitialSate, action) => {
    switch (action.type) {
        case ADD_POST: {
            let post = { likes: 0,message: state.newTextPost}
            return { ...state,
                posts: state.newTextPost ? [ post,...state.posts ] : state.posts,
                newTextPost : ''
            }
        }
        case UPDATE_POST: {
           return { ...state,
            newTextPost : action.newText 
            }
        }
        case SET_PROFILE: {
            return { ...state,
                isMyProfile : action.id === action.profile.userId,
                profile : action.profile
             }
         }
        case UPDATE_STATUS : {
            return{...state, status : action.status}
        }
        case SET_FETHING: {
            return {...state, isFetching : action.fetching}
        }
        default:
            return state
    }
}
export const addpostActionCreate = () => ({ type: ADD_POST })
export const updatepostActionCreate = text => ({ type: UPDATE_POST, newText: text })
export const setUserProfile = (profile, id) => ({ type: SET_PROFILE, profile, id})
export const updateStatus = (status) => ({type: UPDATE_STATUS, status})
export const setFetching = (fetching) => ({type: SET_FETHING, fetching})

export const getProfileThunk = (id) => (dispatch) => {
        dispatch(setFetching(true))
        ProfileApi.getProfile(id).then(data => {
            dispatch(setUserProfile(data, id))
            dispatch(setFetching(false))
        })
        ProfileApi.getStatus(id).then(response => {
            dispatch(updateStatus(response))
        })
    }
export default profileReducer