import { ProfileApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET_PROFILE'
const UPDATE_STATUS = 'UPDATE_STATUS'
const SET_FETHING = 'SET_FETHING'
const SET_AVATAR = 'SET_AVATAR'
const UPDATE_CONTACTS = 'UPDATE_CONTACTS'

const InitialSate = {
    posts: [
        { id: 1, likes: 12, message: "Second Post" },
        { id: 2, likes: 46, message: "First Post" }
    ],
    isMyProfile: false,
    profile: null,
    status: null,
    isFetching: true,
    initialDataContact: null
}

const profileReducer = (state = InitialSate, action) => {
    switch (action.type) {
        case ADD_POST: {
            let post = { id: state.posts[state.posts.length - 1].id + 1, likes: 0, message: action.post }
            return {
                ...state,
                posts: action.post ? [post, ...state.posts] : state.posts
            }
        }
        case SET_PROFILE: {
            state.initialDataContact = {...action.profile.contacts}
            Object.keys(action.profile.contacts).forEach((soc) => {
                state.initialDataContact[soc] = action.profile.contacts[soc] && (soc !== 'website' ? action.profile.contacts[soc].match(/(?<!\/\/)(?<=\/)[a-z0-9]+/ig) : action.profile.contacts[soc])
            })
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
        case SET_AVATAR: {
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        }
        case UPDATE_CONTACTS: {
            let newCont = {...action.contacts}
            Object.keys(action.contacts).forEach((soc) => {
                newCont[soc] = newCont[soc] && ( soc !== 'website' ? `https://${soc}.com/${action.contacts[soc]}` : action.contacts[soc] )
            })
            return {
                ...state, initialDataContact: {...action.contacts}, profile: { ...state.profile, contacts: newCont }
            }
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
export const setAvatar = (photos) => ({ type: SET_AVATAR, photos })
export const updateContacts = (contacts) => ({ type: UPDATE_CONTACTS, contacts })
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
    const response = await ProfileApi.updateAvatar(photo)
    dispatch(setAvatar(response.data.data.photos))
}
export const updateProfile = (profile) => async (dispatch, getState) => {
    dispatch(updateContacts(profile))
    const stateProfile = getState().ProfilePage.profile
    await ProfileApi.updateProfile(stateProfile)
}
export default profileReducer