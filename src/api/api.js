import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '900e2211-c5a2-4e70-9b2c-9ed79188d5f3'
    }
})

export const usersApi = {
    async getUsers(current_page, count, term, sortArg) {
        const response = await instance.get(`users?page=${current_page}&count=${count}&term=${term}&friend=${sortArg}`)
        return response.data
    }
}
export const FollowApi = {
    async follow(id) {
        const response = await instance.post(`follow/${id}`)
        return response.data
    },
    async unfollow(id) {
        const response = await instance.delete(`follow/${id}`)
        return response.data
    }
}
export const AuthApi = {
    async auth() {
        const response = await instance.get('auth/me')
        return response.data
    },
    async logIn(email, password, rememberMe, captcha) {
        const response = await instance.post('auth/login', { email, password, rememberMe, captcha })
        return response.data
    },
    async logOut() {
        const response = await instance.delete('auth/login')
        return response.data
    }
}
export const ProfileApi = {
    async UpdateAvatar(photo) {
        var formData = new FormData();
        formData.append("image", photo);
        const response = await instance.put('/profile/photo', { image: photo }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        )
        return response
    },
    async getProfile(id) {
        const response = await instance.get(`profile/${id}`)
        return response.data
    },
    async setStatus(status) {
        return (instance.put('profile/status', { status: status }))
    },
    async getStatus(id) {
        const response = await instance.get(`profile/status/${id}`)
        return response.data
    }
}