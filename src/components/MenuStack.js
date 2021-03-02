import React from 'react'
import { View, Text, TouchableOpacity as TWF, StyleSheet } from 'react-native'

import colors from '../common/colors'

const MenuStack = (props) => {

    const ativoResumoStyle = !props.res
        ? { backgroundColor: colors.primary.light, height: 5, width: '100%' }
        : null
    const ativoFixoStyle = !props.cusFix
        ? { backgroundColor: colors.primary.light, height: 5, width: '100%' }
        : null
    const ativoDiversoStyle = !props.cusDiv
        ? { backgroundColor: colors.primary.light, height: 5, width: '100%' }
        : null

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.btn}>
                    <TWF onPress={() => { props.res && props.navigation.navigate(props.res) }}>
                        <Text style={styles.btnText}>Resumo</Text>
                    </TWF>
                    <View style={ativoResumoStyle} />
                </View>
                <View style={styles.btn}>
                    <TWF onPress={() => { props.cusFix && props.navigation.navigate(props.cusFix) }}>
                        <Text style={styles.btnText}>Fixos</Text>
                    </TWF>
                    <View style={ativoFixoStyle} />
                </View>
                <View style={styles.btn}>
                    <TWF onPress={() => { props.cusDiv && props.navigation.navigate(props.cusDiv) }}>
                        <Text style={styles.btnText}>Diversos</Text>
                    </TWF>
                    <View style={ativoDiversoStyle} />
                </View>
            </View>
            <View style={{ flex: 1 }} >
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btn: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    btnText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        paddingVertical: 10,
    }
})

export default MenuStack