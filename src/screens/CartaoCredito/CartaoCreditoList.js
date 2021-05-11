import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import ItemCredito from './ItemCredito'
import BotaoAdd from '../../components/BotaoAdd'
import ModalCartaoCredito from './ModalCartaoCredito'
import Carregando from '../../components/Carregando'
import colors from '../../common/colors'
import calcularTotal from '../../common/calcularTotal'
import {
    buscarFaturaDoMes,
    cadastrarGastoNoCartao,
    buscarCartoes
} from '../../services/creditoService'

const CartaoCreditoList = (props) => {
    const [openModal, setOpenModal] = useState(false)
    const [fatura, setFatura] = useState()
    const [cartoes, setCartoes] = useState()
    const [carregando, setCarregando] = useState(false)

    useEffect(() => {
        carregarFatura()
    }, [props.mesAtual])

    const carregarFatura = async () => {
        setFatura()
        setCarregando(true)
        const fatura = await buscarFaturaDoMes(props.mesAtual)
        setCarregando(false)
        setFatura(fatura)
    }

    const openModalAsync = async () => {
        setCarregando(true)
        const cartoes = await buscarCartoes()
        setOpenModal(true)
        setCartoes(cartoes)
        setCarregando(false)
    }

    const addGasto = async (newGasto) => {
        setOpenModal(false)
        setCarregando(true)
        await cadastrarGastoNoCartao(newGasto)
        carregarFatura()
    }

    return (
        <View style={styles.container}>
            <ModalCartaoCredito isVisible={openModal}
                onCancel={() => { setOpenModal(false) }}
                onSave={addGasto}
                cartoes={cartoes} />
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Total da Fatura: </Text>
                <Text style={styles.money}>R$ {calcularTotal(fatura)}</Text>
            </View>
            <Carregando carregando={carregando} />
            <FlatList data={fatura}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) =>
                    <ItemCredito
                        desc={item.cartaoCreditoCompra.desc}
                        valorDaParcela={item.valorParcela}
                        qtdParcelas={item.cartaoCreditoCompra.qtdDeParcelas}
                        parcelaAtual={item.numeroDaParcela}
                        dataCompra={item.cartaoCreditoCompra.dataCompra} />}
            />
            <BotaoAdd onOpenModal={() => openModalAsync()} />
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