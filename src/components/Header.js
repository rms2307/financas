import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import colors from '../common/colors'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.user} onPress={() => console.log('minha conta')}>
                <Icon style={styles.icon} name={'user'} size={22} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={props.onOpenModal}>
                <Text style={styles.text}>{props.mesAtual}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.primary.light,
        padding: 10,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        width: 220,
        borderColor: colors.secondary.light,
        borderWidth: 1,
        borderRadius: 5
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.primary.contrastText
    },
    user: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
        borderRadius: 23,
        margin: 2,
        borderWidth: 1,
        borderColor: colors.background,
    },
    icon: {
        color: '#FFF',
    },
})

export default Header