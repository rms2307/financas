import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import moment from 'moment'
import 'moment/locale/pt-br'

import colors from '../common/colors'
import { ceil } from 'react-native-reanimated'

const ItemCredito = (props) => {

    const dataCompra = props.dataCompra || moment()
    const dia = moment(dataCompra).locale('pt-br').format('DD')
    const mes = moment(dataCompra).locale('pt-br').format('MMM')

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.labelsContainer}>
                <View style={styles.containerData}>
                    <Text style={[styles.textData, { fontSize: 24 }]}>{dia}</Text>
                    <Text style={styles.textData}>{mes}</Text>
                </View>
                <View style={styles.parcelasContainer}>
                    <Text style={styles.title}>{props.desc}</Text>
                    {props.qtdParcelas
                        ? <Text style={styles.textParcela}>{props.parcelaAtual} / {props.qtdParcelas}</Text>
                        : null}
                </View>
            </View>
            <Text style={[styles.money]}>
                R$ {props.valor}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.7,
        borderBottomColor: '#DCDCDC',
        padding: 5,
    },
    labelsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    money: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    containerData: {
        padding: 5,
        alignItems: 'center'
    },
    textData: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    parcelasContainer: {
        marginLeft: 10,
        flexDirection: 'row',
    },
    textParcela: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
})

export default ItemCredito