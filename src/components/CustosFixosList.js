import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import Toast from 'react-native-tiny-toast'

import ItemCusto from './ItemCusto'
import BotaoAdd from './BotaoAdd'
import colors from '../common/colors'
import ModalAddItem from './ModalAddItem'

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
]

const CustosFixosList = (props) => {
    const [openModal, setOpenModal] = useState(false)
    const [custos, setCustos] = useState(custosFixosJan)

    const addCusto = (custo) => {
        if (!custo.desc || !custo.desc.trim()) {
            Toast.show('Digite uma Descrição.',{
                position: Toast.position.TOP,
                containerStyle: {backgroundColor: 'red'},
                textStyle:{fontSize: 20, fontWeight: 'bold'}
            })
            return
        }
        if (!custo.valor || !custo.valor.trim()) {
            Toast.show('Digite um Valor.',{
                position: Toast.position.TOP,
                containerStyle: {backgroundColor: 'red'},
                textStyle:{fontSize: 20, fontWeight: 'bold'}
            })
            return
        }

        setOpenModal(false)
        setCustos(custos.concat(custo))
    }

    return (
        <>
            <View style={styles.container}>
                <ModalAddItem isVisible={openModal}
                    onCancel={() => setOpenModal(false)}
                    onSave={addCusto}
                    title={'Novo Custo Fixo'} />
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Total: </Text>
                    <Text style={styles.money}>R$ 1200,00</Text>
                </View>
                <FlatList data={custos}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <ItemCusto pago={item.pago} desc={item.desc} valor={item.valor} />}
                />
                <BotaoAdd onOpenModal={() => setOpenModal(true)} />
            </View>
        </>

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

export default CustosFixosList