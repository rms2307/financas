import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import colors from '../common/colors'

const Header = (props) => {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.user} onPress={() => navigation.openDrawer()}>
                <Icon style={styles.icon} name={'bars'} size={35} />
            </TouchableOpacity>
            {props.showBtnMeses &&
                <TouchableOpacity style={styles.btn} onPress={props.onOpenModal}>
                    <Text style={styles.text}>{props.mesAtual}</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.primary.main,
        padding: 10,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        width: 160,
        borderColor: '#FFF',
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
        margin: 2,
    },
    icon: {
        color: '#FFF',
    },
})

export default Header