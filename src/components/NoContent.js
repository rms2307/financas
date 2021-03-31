import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const NoContent = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sem Registros</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
    }
})

export default NoContent