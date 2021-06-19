import api from './api'
import showError from '../common/showError'
import AsyncStorage from '@react-native-community/async-storage'


const signin = async (userName, password) => {
    try {
        const response = await api.post(`/auth/signin`,
            {
                userName,
                password
            })

        AsyncStorage.setItem('userDataFinancas', JSON.stringify(response.data))
        api.defaults.headers.common['Authorization'] = `bearer ${response.data.accessToken}`

        return response.data
    } catch (e) {
        showError(e)
    }
}

const refreshToken = async (accessToken, refreshToken) => {
    try {
        const response = await api.post(`/auth/refresh`,
            {
                accessToken,
                refreshToken
            })

        AsyncStorage.setItem('userDataFinancas', JSON.stringify(response.data))
        api.defaults.headers.common['Authorization'] = `bearer ${response.data.accessToken}`

        return response.data
    } catch (e) {
        return null
    }
}

const signup = async (userName, password, confirmPassword, nomeCompleto) => {
    try {
        const response = await api.post(`/users`,
            {
                userName,
                password,
                confirmPassword,
                nomeCompleto
            })

        return response.data
    } catch (e) {
        showError(e)
    }
}

const logout = async () => {
    try {
        const response = await api.get(`/auth/revoke`)
        delete api.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userDataFinancas')

        return response.data
    } catch (e) {
        showError(e)
    }
}

const getUser = async () => {
    try {
        const response = await api.get(`/users`)
        
        return response.data
    } catch (e) {
        showError(e)
    }
}

export { signin, refreshToken, signup, logout, getUser }

