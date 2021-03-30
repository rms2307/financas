import { Alert } from 'react-native'

export default (err) => {
    if (err.response && err.response.data) {
        Alert.alert('Ocorreu um erro', `${err.response.data}`)
    } else {
        Alert.alert('Ocorreu um erro', `${err}`)
    }
}