import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../../services/api'

const AuthOrApp = (props) => {
    const { navigation } = props

    useEffect(() => {
        async function getToken() {
            const userDataJson = await AsyncStorage.getItem('userDataFinancas')
            let userData = null

            try {
                userData = JSON.parse(userDataJson)
            } catch (e) {
                console.log('Erro => AuthOrApp')
                // Erro
            }
            
            if (userData && userData.accessToken) {
                api.defaults.headers.common['Authorization'] = `bearer ${userData.accessToken}`
                console.log(userData)
                navigation.navigate('Tab', userData)
            } else {
                navigation.navigate('Auth')
            }
        }

        getToken()
    })

    return (
        <View>
            <Text>AuthOrApp</Text>
        </View>
    )
}

export default AuthOrApp