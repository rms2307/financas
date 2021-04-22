import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'

import ItemCredito from './ItemCredito'
import BotaoAdd from '../../components/BotaoAdd'
import ModalCartaoCredito from './ModalCartaoCredito'
import colors from '../../common/colors'

const custosDiversosJan = [
    {
        id: Math.random(),
        desc: 'Conta Luz',
        valor: 100,
        qtdParcelas: 0,
        parcelaAtual: 0,
        data: '2021-10-15'
    },
    {
        id: Math.random(),
        desc: 'Conta Agua',
        valor: 100,
        qtdParcelas: 2,
        parcelaAtual: 1,
        data: '2021-11-12'
    },
    {
        id: Math.random(),
        desc: 'Telefone',
        valor: 100,
        qtdParcelas: 2,
        parcelaAtual: 1,
        data: '2021-09-11'
    }
]

const CartaoCreditoList = (props) => {
    const [openModal, setOpenModal] = useState(false)
    const [gastos, setGasto] = useState(custosDiversosJan)

    const addCusto = (gasto) => {
        if (!gasto.desc || !gasto.desc.trim()) {
            Toast.show('Digite uma Descrição.', {
                position: Toast.position.TOP,
                containerStyle: { backgroundColor: 'red' },
                textStyle: { fontSize: 20, fontWeight: 'bold' }
            })
            return
        }
        if (!gasto.valor || !gasto.valor.trim()) {
            Toast.show('Digite um Valor.', {
                position: Toast.position.TOP,
                containerStyle: { backgroundColor: 'red' },
                textStyle: { fontSize: 20, fontWeight: 'bold' }
            })
            return
        }

        setOpenModal(false)
        setGasto(gastos.concat(gasto))
    }

    return (
        <View style={styles.container}>
            <ModalCartaoCredito isVisible={openModal}
                onCancel={() => setOpenModal(false)}
                onSave={addCusto}
                title={'Novo Gasto no Cartão'}
                credito={true} />
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Total da Fatura: </Text>
                <Text style={styles.money}>R$ 1200,00</Text>
            </View>
            <FlatList data={gastos}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) =>
                    <ItemCredito
                        desc={item.desc}
                        valor={item.valor}
                        qtdParcelas={item.qtdParcelas}
                        parcelaAtual={item.parcelaAtual}
                        dataCompra={item.data} />}
            />
            <BotaoAdd onOpenModal={() => setOpenModal(true)} />
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

export default CartaoCreditoList