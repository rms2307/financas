import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

import colors from '../common/colors'

const Carregando = (props) => {
    return (
        <>
            {
                props.carregando
                    ? <View style={styles.container}>
                        <ActivityIndicator size="large" color={colors.outros} />
                    </View>
                    : null
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})

export default Carregando