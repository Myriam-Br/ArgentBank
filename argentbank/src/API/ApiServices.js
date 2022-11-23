import axiosInstance from "./ApiInstance";

export function loginUser(object) {
    return axiosInstance.post(`/login`, object)
}
export function getUserProfil(object, headers) {
    return axiosInstance.post(`/profile`, object, headers)
}
export function updateUserProfil(object, headers) {
    return axiosInstance.put(`/profile`, object, headers)
}