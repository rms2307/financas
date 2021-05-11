import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'

import ItemCredito from './ItemCredito'
import BotaoAdd from '../../components/BotaoAdd'
import ModalCartaoCredito from './ModalCartaoCredito'
import Carregando from '../../components/Carregando'
import colors from '../../common/colors'
import calcularTotal from '../../common/calcularTotal'
import { buscarFaturaDoMes } from '../../services/creditoService'
import { useEffect } from 'react'

const CartaoCreditoList = (props) => {
    const [openModal, setOpenModal] = useState(false)
    const [fatura, setFatura] = useState()
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

    return (
        <View style={styles.container}>
            <ModalCartaoCredito isVisible={openModal}
                onCancel={() => { setOpenModal(false), setFatura() }}
                onSave={() => console.log('salvar')}
                title={'Novo Gasto no Cartão'}
                credito={true} />
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