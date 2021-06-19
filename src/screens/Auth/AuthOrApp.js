import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import moment from 'moment'

import { refreshToken } from '../../services/authService'
import api from '../../services/api'
import colors from '../../common/colors'


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

            if (userData && userData.accessToken && userData.expiraEm) {
                const hoje = moment().format('YYYY-MM-DD HH:mm:ss')
                const dtExpira = moment().format(userData.expiraEm)

                if (hoje > dtExpira) {
                    // Token expirado

                    const user = await refreshToken(userData.accessToken, userData.refreshToken)
                    user ? navigation.navigate('Drawer', user) : navigation.navigate('Auth')
                } else {

                    api.defaults.headers.common['Authorization'] = `bearer ${userData.accessToken}`
                    navigation.navigate('Drawer', userData)
                }
            } else {
                navigation.navigate('Auth')
            }
        }

        getToken()
    })

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size="large" color={colors.outros} />
        </View>
    )
}

export default AuthOrApp