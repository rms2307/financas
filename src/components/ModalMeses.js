import React from 'react'
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity as TO
} from 'react-native'

import colors from '../common/colors'

const ModalMeses = (props) => {
    return (
        <Modal transparent={true} visible={props.isVisible}
            onRequestClose={props.onCancel} animationType='slide'>
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.background} ></View>
            </TouchableWithoutFeedback>
            <View style={styles.container}>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual({ num: 1, mes: 'Janeiro' })}>
                    <Text style={styles.text}>Janeiro</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual({ num: 2, mes: 'Fevereiro' })}>
                    <Text style={styles.text}>Fevereiro</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual({ num: 3, mes: 'Março' })}>
                    <Text style={styles.text}>Março</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual({ num: 4, mes: 'Abril' })}>
                    <Text style={styles.text}>Abril</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual({ num: 5, mes: 'Maio' })}>
                    <Text style={styles.text}>Maio</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual({ num: 6, mes: 'Junho' })}>
                    <Text style={styles.text}>Junho</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual({ num: 7, mes: 'Julho' })}>
                    <Text style={styles.text}>Julho</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual({ num: 8, mes: 'Agosto' })}>
                    <Text style={styles.text}>Agosto</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual({ num: 9, mes: 'Setembro' })}>
                    <Text style={styles.text}>Setembro</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual({ num: 10, mes: 'Outubro' })}>
                    <Text style={styles.text}>Outubro</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual({ num: 11, mes: 'Novembro' })}>
                    <Text style={styles.text}>Novembro</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual({ num: 12, mes: 'Dezembro' })}>
                    <Text style={styles.text}>Dezembro</Text>
                </TO>
            </View>
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.background} ></View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        padding: 5,
        marginHorizontal: 60,
        backgroundColor: colors.background,
        alignItems: 'center',
        borderRadius: 12,
        elevation: 4,
    },
    touch: {
        padding: 10,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        width: '100%',
        alignItems: 'center'
    },
    text: {
        color: colors.secondary.contrastText,
        fontSize: 25,
        fontWeight: 'bold',
    }
})

export default ModalMeses