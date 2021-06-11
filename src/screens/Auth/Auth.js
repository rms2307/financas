import React, { useEffect, useState } from 'react'
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

import AuthInput from '../../components/AuthInput'

import { signin } from '../../services/authService'
import backgroundImage from '../../../assets/imgs/auth-background.png'
import colors from '../../common/colors'

const Auth = (props) => {
    const [userName, setUserName] = useState('robson.moraes')
    const [password, setPassword] = useState('teste123')
    const { navigation } = props

    const login = async () => {
        const user = await signin(userName.toLowerCase(), password)

        user && navigation.navigate('Tab', user)
    }

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>MY</Text>
                    <Text style={styles.title}>WALLET</Text>
                </View>
                <View style={styles.formContainer}>
                    <AuthInput icon='user' placeholder='Nome de Usuário'
                        value={userName}
                        style={styles.input}
                        onChangeText={(userName) => setUserName(userName)} />
                    <AuthInput icon='lock' placeholder='Senha' secureTextEntry={true}
                        value={password}
                        style={styles.input}
                        onChangeText={(pass) => setPassword(pass)} />
                    <TouchableOpacity onPress={login}>
                        <View style={styles.buttonLogin}>
                            <Text style={styles.buttonText}>
                                ENTRAR
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.signupContainer} >
                    <TouchableOpacity onPress={() => console.log('cadastrar')}>
                        <View style={styles.buttonSignup}>
                            <Text style={styles.buttonText}>
                                CRIAR CONTAR
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('esqueceu senha')}>
                        <View style={styles.buttonLikeText}>
                            <Text style={styles.buttonText}>
                                Esqueceu a senha?
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: colors.primary.contrastText,
        fontWeight: 'bold',
        fontSize: 50,
        fontFamily: "Righteous",
    },
    titleContainer: {
        marginTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    formContainer: {
        width: Dimensions.get('window').width - 60
    },
    signupContainer: {
        width: Dimensions.get('window').width - 60,
        marginBottom: 20
    },
    buttonLogin: {
        backgroundColor: colors.primary.main,
        marginTop: 16,
        padding: 10,
        alignItems: 'center'
    },
    buttonSignup: {
        borderWidth: 3,
        borderColor: colors.primary.main,
        padding: 10,
        alignItems: 'center',
    },
    buttonLikeText: {
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold'
    }
})

export default Auth