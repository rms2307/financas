import axios from "axios"

const api = axios.create({
    // baseURL: 'http://192.168.0.30:5001'
    baseURL: 'https://rms-financas-api.herokuapp.com'
})

export default api