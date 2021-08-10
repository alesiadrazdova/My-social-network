import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': '3ca9781b-9298-496d-82f4-e13184811f7e' }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}` )
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
};
