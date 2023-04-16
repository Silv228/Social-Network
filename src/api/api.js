import axios from "axios";

const instance = axios.create({
    withCredentials : true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers : {
        'API-KEY' : '900e2211-c5a2-4e70-9b2c-9ed79188d5f3'
    }
})

export const usersApi = {
    getUsers(current_page, count){
        return (instance.get(`users?page=${current_page}&count=${count}`).then((response) => response.data))
    }
}
export const FollowApi = {
    follow(id){
        return (instance.post(`follow/${id}`).then((response) => response.data))
    },
    unfollow(id){
        return (instance.delete(`follow/${id}`).then((response) => response.data))
    }
}
export const AuthApi = {
    auth(){
        return (instance.get('auth/me').then(response => response.data))
    },
    logIn(email, password, rememberMe, captcha){
        return (instance.post('auth/login', {email, password, rememberMe, captcha}).then((response) => response.data))
    },
    logOut(){
        return (instance.delete('auth/login').then(response => response.data))
    }
}
export const ProfileApi = {
    getProfile(id){
        return (instance.get(`profile/${id}`).then(response => response.data))
    },
    setStatus(status){
        return (instance.put('profile/status', {status : status}))
    },
    getStatus(id){
        return (instance.get(`profile/status/${id}`).then((response) => response.data))
    }
}