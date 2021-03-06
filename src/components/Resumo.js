import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import colors from '../common/colors'

const Resumo = (props) => {

    const getColorSaldo = props.receita < props.despesa
        ? { color: colors.despesas }
        : { color: colors.receitas }


    return (
        <View style={styles.card}>
            <Text style={styles.title}>Visão Geral</Text>

            <View style={styles.container}>
                <View style={styles.labelsContainer}>
                    <View style={{ backgroundColor: colors.primary.dark, height: '100%', width: 10 }}></View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.item}>Saldo</Text>
                    </View>
                </View>
                <Text style={[styles.money, getColorSaldo]}>
                    R$ {props.receita - (props.despesaDiversa + props.despesaFixa)}
                </Text>
            </View>

            <View style={styles.container}>
                <View style={styles.labelsContainer}>
                    <View style={{ backgroundColor: colors.receitas, height: '100%', width: 10 }}></View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.item}>Receitas</Text>
                    </View>
                </View>
                <Text style={[styles.money, { color: colors.receitas }]}>R$ {props.receita}</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.labelsContainer}>
                    <View style={{ backgroundColor: colors.despesas, height: '100%', width: 10 }}></View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.item}>Despesas Fixas</Text>
                    </View>
                </View>
                <Text style={[styles.money, { color: colors.despesas }]}>R$ {props.despesaFixa}</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.labelsContainer}>
                    <View style={{ backgroundColor: colors.despesas, height: '100%', width: 10 }}></View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.item}>Despesas Diversas</Text>
                    </View>
                </View>
                <Text style={[styles.money, { color: colors.despesas }]}>R$ {props.despesaDiversa}</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.labelsContainer}>
                    <View style={{ backgroundColor: colors.outros, height: '100%', width: 10 }}></View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.item}>Cartão de Crédito</Text>
                    </View>
                </View>
                <Text style={[styles.money, { color: colors.despesas }]}>R$ {props.cartao}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
    },
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
    item: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.secondary.dark,
        marginBottom: 8,
    },
    money: {
        fontSize: 22,
        marginLeft: 5,
        marginTop: 12,
        fontWeight: 'bold',
    }
})

export default Resumo