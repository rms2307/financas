import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import colors from '../common/colors'

const Header = (props) => {
    

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={props.onOpenModal}>
                <Text style={styles.text}>{props.mesAtual}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary.light,
        padding: 10,
        alignItems: 'center'
    },
    btn: {
        alignItems: 'center',
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
    }
})

export default Header