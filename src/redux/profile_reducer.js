import { ProfileApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET_PROFILE'
const UPDATE_STATUS = 'UPDATE_STATUS'
const SET_FETHING = 'SET_FETHING'

const InitialSate = {
    posts: [
        { likes: 12, message: "Hi, Hitler 1488" },
        { likes: 46, message: "I'm don't nacism" }
    ],
    isMyProfile : false,
    profile : null,
    status : null,
    isFetching : true
}

const profileReducer = (state = InitialSate, action) => {
    switch (action.type) {
        case ADD_POST: {
            let post = { likes: 0,message: action.post}
            return { ...state,
                posts: action.post ? [ post,...state.posts ] : state.posts,
                newTextPost : ''
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
//Action Creators
export const addpostActionCreate = (post) => ({ type: ADD_POST, post })
export const setUserProfile = (profile, id) => ({ type: SET_PROFILE, profile, id})
export const updateStatus = (status) => ({type: UPDATE_STATUS, status})
export const setFetching = (fetching) => ({type: SET_FETHING, fetching})
//Thunk Creators
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