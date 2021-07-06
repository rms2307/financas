import React, { useState } from 'react'
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

import AuthInput from '../../components/AuthInput'
import BotaoWithState from '../../components/BotaoWithState'

import { signin, signup, recuperarSenha } from '../../services/authService'
import backgroundImage from '../../../assets/imgs/auth-background.png'
import colors from '../../common/colors'

const Auth = (props) => {
    const [carregando, setCarregando] = useState(false)
    const [cadastrarNovoUser, setCadastrarNovoUser] = useState(false)
    const [esqueceuSenha, setEsqueceuSenha] = useState(false)
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [nomeCompleto, setNomeCompleto] = useState('')
    const { navigation } = props

    const _signin = async () => {
        setCarregando(true)
        const user = await signin(userName.toLowerCase(), password)
        user && navigation.navigate('Drawer', user)
        !user && setCarregando(false)
    }

    const _signup = async () => {
        setCarregando(true)
        const user = await signup(userName.toLowerCase(), email, password, confirmPassword, nomeCompleto)
        user && await _signin()
        !user && setCarregando(false)
    }

    const _recuperarSenha = async () => {
        setCarregando(true)
        await recuperarSenha(email)
        setEsqueceuSenha(false)
        setCarregando(false)
    }

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>My</Text>
                    <Text style={styles.title}>Wallet</Text>
                </View>
                <View style={styles.formContainer}>
                    {cadastrarNovoUser &&
                        <AuthInput icon='user' placeholder='Nome Completo'
                            value={nomeCompleto}
                            style={styles.input}
                            onChangeText={(nome) => setNomeCompleto(nome)} />}
                    {!esqueceuSenha &&
                        <AuthInput icon='user' placeholder='Nome de Usuário'
                            value={userName}
                            style={styles.input}
                            onChangeText={(userName) => setUserName(userName)} />}
                    {(cadastrarNovoUser || esqueceuSenha) &&
                        <AuthInput icon='at' placeholder={esqueceuSenha ? 'Digite o e-mail cadastrado' : 'E-mail'}
                            value={email}
                            style={styles.input}
                            onChangeText={(email) => setEmail(email)} />}
                    {!esqueceuSenha &&
                        <AuthInput icon='lock' placeholder='Senha' secureTextEntry={true}
                            value={password}
                            style={styles.input}
                            onChangeText={(pass) => setPassword(pass)} />}
                    {cadastrarNovoUser &&
                        <AuthInput icon='lock' placeholder='Confirmar Senha' secureTextEntry={true}
                            value={confirmPassword}
                            style={styles.input}
                            onChangeText={(pass) => setConfirmPassword(pass)} />}
                    <BotaoWithState
                        label={cadastrarNovoUser ? 'SALVAR' : esqueceuSenha ? 'RECUPERAR SENHA' : 'ENTRAR'}
                        onPress={cadastrarNovoUser ? _signup : esqueceuSenha ? _recuperarSenha : _signin}
                        carregando={carregando} />
                </View>
                {!cadastrarNovoUser && !esqueceuSenha &&
                    <View style={styles.signupContainer} >
                        <TouchableOpacity onPress={() => setCadastrarNovoUser(true)}>
                            <View style={styles.buttonSignup}>
                                <Text style={styles.buttonText}>
                                    CRIAR CONTAR
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setEsqueceuSenha(true)}>
                            <View style={styles.buttonLikeText}>
                                <Text style={styles.buttonText}>
                                    Esqueceu a senha?
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>}
                {(cadastrarNovoUser || esqueceuSenha) &&
                    <View style={styles.signupContainer} >
                        <TouchableOpacity onPress={() => { setCadastrarNovoUser(false), setEsqueceuSenha(false) }}>
                            <View style={styles.buttonSignup}>
                                <Text style={styles.buttonText}>
                                    CANCELAR
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>}
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
        fontSize: 50,
        fontFamily: 'Lato-Light',
    },
    titleContainer: {
        marginTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    formContainer: {
        width: Dimensions.get('window').width - 60
    },
    signupContainer: {
        width: Dimensions.get('window').width - 60,
        marginBottom: 20
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
    },
    labelEsqueciSenha: {
        color: "#000",
        fontSize: 22,
        fontWeight: 'bold'
    }
})

export default Auth