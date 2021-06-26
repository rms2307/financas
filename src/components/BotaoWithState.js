import React from 'react'
import { TouchableOpacity, View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import colors from '../common/colors'

const BotaoWithState = (props) => {
    return (
        props.carregando
            ?
            <View style={styles.button}>
                <ActivityIndicator size="large" color="#FFF" />
            </View>
            :
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {props.label}
                    </Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary.main,
        marginTop: 16,
        padding: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold'
    }
})

export default BotaoWithState