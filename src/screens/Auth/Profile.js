import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Header from '../../components/Header'

import colors from '../../common/colors'
import { getUser } from '../../services/authService'

const Profile = (props) => {
    const [nome, setNome] = useState('')

    useEffect(() => {
        async function buscaUser() {
            const user = await getUser();
            setNome(user.nomeCompleto)
        }
        buscaUser()
    }, [])

    return (
        <>
            <Header {...props} />
            <View style={styles.container}>
                <View style={styles.icon}>
                    <Icon name='user' size={80} color={'#FFF'} />
                </View>
                <Text style={styles.nome}>{nome}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.primary.main,
        padding: 30
    },
    containerTitle: {
        backgroundColor: colors.primary.main,
        paddingBottom: 26
    },
    nome: {
        color: colors.primary.contrastText,
        fontSize: 26,
        margin: 16
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF',
        width: 120,
        height: 120,
        borderRightWidth: 6,
        borderBottomWidth: 4,
        borderColor: '#FFF',
        borderRadius: 60,
    },
})

export default Profile