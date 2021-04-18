import React, { useState } from 'react'
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native'

import colors from '../common/colors'

const ModalDeletarCustoFixo = (props) => {

    return (
        <Modal transparent={true} visible={props.isVisible}
            onRequestClose={() => props.onCancel()} animationType='fade' >
            <TouchableWithoutFeedback onPress={() => props.onCancel()}>
                <View style={styles.background} ></View>
            </TouchableWithoutFeedback>
            <Text style={styles.header}>Remover?</Text>
            <View style={styles.container}>
                <Text style={styles.subTitle}>Escolha uma opção:</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={() => { props.onDeleteAtual(props.custo), props.onCancel() }}>
                        <Text style={styles.btn}>Atual</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.onDeleteProximos(props.custo), props.onCancel() }}>
                        <Text style={styles.btn}>Proximos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.onDeleteTodos(props.custo), props.onCancel() }}>
                        <Text style={styles.btn}>Todos</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={() => props.onCancel()}>
                <View style={styles.background} ></View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    container: {
        backgroundColor: colors.secondary.light,
        paddingHorizontal: 15
    },
    header: {
        backgroundColor: colors.secondary.dark,
        color: colors.secondary.contrastText,
        textAlign: 'center',
        padding: 15,
        fontSize: 24,
        fontWeight: 'bold'
    },
    subTitle: {
        color: colors.secondary.contrastText,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    buttons:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15
    },
    btn: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.secondary.contrastText,
        backgroundColor: colors.secondary.dark,
        paddingHorizontal: 10,
        paddingVertical: 4,
    }
})

export default ModalDeletarCustoFixo