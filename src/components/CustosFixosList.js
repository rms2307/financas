import React from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'

import ItemCusto from './ItemCusto'
import colors from '../common/colors'

const custosFixosJan = [
    {
        id: Math.random(),
        desc: 'Conta Luz',
        valor: 100,
        pago: true
    },
    {
        id: Math.random(),
        desc: 'Conta Agua',
        valor: 100,
        pago: true,
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
        pago: false,
    },
    {
        id: Math.random(),
        desc: 'Seguro',
        valor: 100,
        pago: true,
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

const CustosFixosList = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Custos Fixos</Text>
                <Text style={styles.money}>R$ 1200,00</Text>
            </View>
            <FlatList data={custosFixosJan}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => <ItemCusto pago={item.pago} desc={item.desc} valor={item.valor} />}
            />
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
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.secondary.dark
    },
    money: {
        color: colors.secondary.dark,
        fontWeight: 'bold',
        fontSize: 22
    }
})

export default CustosFixosList