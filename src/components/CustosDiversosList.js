import React from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'

import ItemCusto from './ItemCusto'
import BotaoAdd from './BotaoAdd'
import colors from '../common/colors'

const custosDiversosJan = [
    {
        id: Math.random(),
        desc: 'Conta Luz',
        valor: 100,
        pago: true,
        dataPagamento: '2021-10-15'
    },
    {
        id: Math.random(),
        desc: 'Conta Agua',
        valor: 100,
        pago: true,
        dataPagamento: '2021-11-15'
    },
    {
        id: Math.random(),
        desc: 'Telefone',
        valor: 100,
        pago: false,
        dataPagamento: '2021-09-15'
    },
    {
        id: Math.random(),
        desc: 'Internet',
        valor: 100,
        pago: false,
        dataPagamento: '2021-10-10'
    },
    {
        id: Math.random(),
        desc: 'Seguro',
        valor: 100,
        pago: true,
        dataPagamento: '2021-10-20'
    },
    {
        id: Math.random(),
        desc: 'Curso',
        valor: 100,
        pago: false,
    },
    {
        id: Math.random(),
        desc: 'Conta Luz',
        valor: 100,
        pago: false,
    },
    {
        id: Math.random(),
        desc: 'Conta Agua',
        valor: 100,
        pago: false,
    },
    {
        id: Math.random(),
        desc: 'Telefone',
        valor: 100,
        pago: false,
    },
    {
        id: Math.random(),
        desc: 'Internet',
        valor: 100,
        pago: true,
    },
    {
        id: Math.random(),
        desc: 'Seguro',
        valor: 100,
        pago: false,
    },
    {
        id: Math.random(),
        desc: 'Curso',
        valor: 100,
        pago: false,
    },
    {
        id: Math.random(),
        desc: 'Telefone',
        valor: 100,
        pago: false,
    },
    {
        id: Math.random(),
        desc: 'Internet',
        valor: 100,
        pago: true,
    },
    {
        id: Math.random(),
        desc: 'Seguro',
        valor: 100,
        pago: false,
    },
    {
        id: Math.random(),
        desc: 'Telefone',
        valor: 100,
        pago: true,
    },
    {
        id: Math.random(),
        desc: 'Internet',
        valor: 100,
        pago: false,
    },
    {
        id: Math.random(),
        desc: 'Seguro',
        valor: 100,
        pago: false,
    },
]

const CustosDiversosList = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Total: </Text>
                <Text style={styles.money}>R$ 1200,00</Text>
            </View>
            <FlatList data={custosDiversosJan}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) =>
                    <ItemCusto
                        pago={item.pago}
                        desc={item.desc}
                        valor={item.valor}
                        dataPagamento={item.dataPagamento} />}
            />
            <BotaoAdd />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        padding: 20,
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 10,
        color: colors.despesas
    },
    money: {
        color: colors.despesas,
        fontWeight: 'bold',
        fontSize: 24
    }
})

export default CustosDiversosList