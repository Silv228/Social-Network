export const getUsers = (state) => {
    return state.UsersPage.users
}
export const getTotalUsers = (state) => {
    return state.UsersPage.total_users
}
export const getCount = (state) => {
    return state.UsersPage.count
}
export const getCurrentPage = (state) => {
    return state.UsersPage.current_page
}
export const getIdInProgress = (state) => {
    return state.UsersPage.idInProgress
}
export const getIsFetchingUsers = (state) => {
    return state.UsersPage.isFetching
}
export const getIsAuth = (state) => {
    return state.Auth.isAuth
}
export const getAuthId = (state) => {
    return state.Auth.id
}
export const getProfile = (state) =>{
    return state.ProfilePage.profile
}
export const getId = (state) => {
    return state.ProfilePage.profile.userId
}
export const getStatus = (state) => {
    return state.ProfilePage.status
}
export const getIsFetchingProfile = (state) => {
    return state.ProfilePage.isFetching
}
export const getInit = (state) => {
    return state.appReducer.init
}


