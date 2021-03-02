import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import moment from 'moment'
import 'moment/locale/pt-br'

import colors from '../common/colors'

const ItemCusto = (props) => {

    const dataPagamento = props.dataPagamento || moment()
    const dia = moment(dataPagamento).locale('pt-br').format('DD')
    const mes = moment(dataPagamento).locale('pt-br').format('MMM')

    const pagoOrNotStyle = props.pago == true
        ? { backgroundColor: colors.outros }
        : null

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.labelsContainer}>
                <View style={[{ backgroundColor: colors.despesas, height: '100%', width: 10 }, pagoOrNotStyle]}></View>
                <View style={styles.containerData}>
                    <Text style={styles.textData}>{dia}</Text>
                    <Text style={styles.textData}>{mes}</Text>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.title}>{props.desc}</Text>
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
        borderBottomWidth: 0.7,
        borderBottomColor: '#DCDCDC',
        padding: 5,
    },
    labelsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    money: {
        fontSize: 22,
        marginLeft: 5,
        marginTop: 12,
        fontWeight: 'bold',
    },
    containerData: {
        marginLeft: 5,
        padding: 5,
        alignItems: 'center'
    },
    textData: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ItemCusto