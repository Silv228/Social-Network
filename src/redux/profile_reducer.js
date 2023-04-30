import { ProfileApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET_PROFILE'
const UPDATE_STATUS = 'UPDATE_STATUS'
const SET_FETHING = 'SET_FETHING'
const SET_AVATART = 'SET_AVATART'

const InitialSate = {
    posts: [
        { likes: 12, message: "Second Post" },
        { likes: 46, message: "First Post" }
    ],
    isMyProfile: false,
    profile: null,
    status: null,
    isFetching: true
}

const profileReducer = (state = InitialSate, action) => {
    switch (action.type) {
        case ADD_POST: {
            let post = { likes: 0, message: action.post }
            return {
                ...state,
                posts: action.post ? [post, ...state.posts] : state.posts
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                isMyProfile: action.id === action.profile.userId,
                profile: action.profile
            }
        }
        case UPDATE_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_FETHING: {
            return { ...state, isFetching: action.fetching }
        }
        case SET_AVATART: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state
    }
}
//Action Creators
export const addpostActionCreate = (post) => ({ type: ADD_POST, post })
export const setUserProfile = (profile, id) => ({ type: SET_PROFILE, profile, id })
export const updateStatus = (status) => ({ type: UPDATE_STATUS, status })
export const setFetching = (fetching) => ({ type: SET_FETHING, fetching })
export const setAvatar = (photos) => ({type: SET_AVATART, photos})
//Thunk Creators
export const getProfileThunk = (id) => async (dispatch) => {
    dispatch(setFetching(true))
    const data = await ProfileApi.getProfile(id)
    dispatch(setUserProfile(data, id))
    dispatch(setFetching(false))
    dispatch(updateStatus('----------------'))
    const response = await ProfileApi.getStatus(id)
    dispatch(updateStatus(response))
}
export const saveAvatar = (photo) => async (dispatch) => {
    const response = await ProfileApi.UpdateAvatar(photo)
    dispatch(setAvatar(response.data.data.photos))  
}
export default profileReducer