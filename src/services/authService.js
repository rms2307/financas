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

export { signin }

