import {usersApi, FollowApi} from "../api/api";

const ADD_FRIEND = 'ADD_FRIEND'
const DEL_FRIEND = 'DEL_FRIEND'
const SET_USERS = 'SET_USERS'
const CHANGE_PAGE = 'CHANGE_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const IS_FETCHING = 'IS_FETCHING'
const TOOGLE_IN_PROGRESS = 'TOOGLE_IN_PROGRESS'
const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD'

const InitialSate = {
    users : [],
    current_page : 1,
    total_users : 0,
    count : 5,
    isFetching : false,
    idInProgress : [],
    queryUser : ''
}
const usersReduser = (state = InitialSate, action) => {
    switch (action.type){
        case ADD_FRIEND :
            return {
                ...state,
                users : state.users.map((user) => {
                    if (user.id === action.id){
                        return({...user, followed : true})
                    }
                    return user
                })
            }
        case DEL_FRIEND:
            return {
                ...state,
                users : state.users.map((user) => {
                    if (user.id === action.id){
                        return({...user, followed : false})
                    }
                    return user
                })
            }
        case SET_USERS :
            return {
                ...state, users : action.users
            }
        case CHANGE_PAGE :
            return {
                ...state, current_page : action.Cpage
            }
        case SET_TOTAL_USERS:
            return {
                ...state, total_users : action.Tusers
            }
        case IS_FETCHING: 
            return{
                ...state, isFetching : action.isFetching
            }
        case TOOGLE_IN_PROGRESS:
            return {...state, idInProgress :  action.isFetching 
                ? [...state.idInProgress, action.id]
                : state.idInProgress.filter((id) => id !== action.id) 
            }
        case CHANGE_SEARCH_FIELD:
            return {...state, queryUser : action.term}
        default : 
            return state
    }
}
//Action Creators
export const addFriend = (id) => ({type : ADD_FRIEND, id})
export const delFriend = (id) => ({type : DEL_FRIEND, id})
export const setUsers = (users) => ({type : SET_USERS, users})
export const setCurrentPage = (Cpage) => ({type : CHANGE_PAGE, Cpage})
export const setTotalUsers = (Tusers) => ({type : SET_TOTAL_USERS, Tusers})
export const setFetching = (isFetching) => ({type : IS_FETCHING, isFetching})
export const setIdInProgress = (isFetching, id) => ({type : TOOGLE_IN_PROGRESS, isFetching, id})
export const changeQueryUser = (term) => ({type : CHANGE_SEARCH_FIELD, term})

//Thunk Creators
export const getUsersThunk = (current_page, count, term) => {
    return (dispatch) => {  
        dispatch(setCurrentPage(current_page))
        dispatch(setFetching(true))
        usersApi.getUsers(current_page, count, term).then((users) => {
            dispatch(setFetching(false))
            dispatch(setUsers(users.items))
            dispatch(setTotalUsers(users.totalCount))
        })
    }
}
export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(setIdInProgress(true, userId))
        FollowApi.follow(userId).then((data) => {
            if (data.resultCode === 0){
                dispatch(addFriend(userId))
            }
            dispatch(setIdInProgress(false, userId))
        })
    }
}
export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(setIdInProgress(true, userId))
        FollowApi.unfollow(userId).then((data) => {
            if (data.resultCode === 0){
                dispatch(delFriend(userId))
            }
            dispatch(setIdInProgress(false, userId))
        })
    }
}

export default usersReduser