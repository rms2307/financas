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
                <TO style={styles.touch} onPress={() => props.onSetMesAtual('Janeiro')}>
                    <Text style={styles.text}>Janeiro</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual('Fevereiro')}>
                    <Text style={styles.text}>Fevereiro</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual('Março')}>
                    <Text style={styles.text}>Março</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual('Abril')}>
                    <Text style={styles.text}>Abril</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual('Maio')}>
                    <Text style={styles.text}>Maio</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual('Junho')}>
                    <Text style={styles.text}>Junho</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual('Julho')}>
                    <Text style={styles.text}>Julho</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual('Agosto')}>
                    <Text style={styles.text}>Agosto</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual('Setembro')}>
                    <Text style={styles.text}>Setembro</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual('Outubro')}>
                    <Text style={styles.text}>Outubro</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual('Novembro')}>
                    <Text style={styles.text}>Novembro</Text>
                </TO>
                <TO style={styles.touch} onPress={() => props.onSetMesAtual('Dezembro')}>
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