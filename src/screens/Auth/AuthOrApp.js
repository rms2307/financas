import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import moment from 'moment'

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
                console.log('Erro => AsyncStorage')
                // Erro
            }
            userData = null
            if (userData && userData.accessToken && userData.expiraEm) {
                const hoje = moment().format('YYYY-MM-DD HH:mm:ss')
                const dtExpira = moment().format(userData.expiraEm)

                if (hoje > dtExpira) {
                    // Token expirado
                    navigation.navigate('Auth')
                } else {

                    api.defaults.headers.common['Authorization'] = `bearer ${userData.accessToken}`
                    navigation.navigate('Tab', userData)
                }
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