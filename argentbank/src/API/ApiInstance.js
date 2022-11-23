import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:`http://localhost:3001/api/v1/user`
})
axiosInstance.interceptors.request.use((config) => {
    console.log('CONFIG',config);
    return config;
})

export default axiosInstance