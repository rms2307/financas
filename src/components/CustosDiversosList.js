import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Toast from 'react-native-tiny-toast'

import ItemCusto from './ItemCusto'
import BotaoAdd from './BotaoAdd'
import ModalAddItem from './ModalAddItem'
import NoContent from './NoContent'
import Carregando from './Carregando'
import colors from '../common/colors'
import numeroToMoeda from '../common/numeroToMoeda'
import {
    buscarCustosDiversosDoMes,
    cadastrarCustoDiverso,
    deletarCustoDiverso,
    editarCustoDiverso,
} from '../services/diversoService'

const CustosDiversosList = (props) => {
    const [openModal, setOpenModal] = useState(false)
    const [custos, setCustos] = useState()
    const [custo, setCusto] = useState()
    const [carregando, setCarregando] = useState(false)

    useEffect(() => {
        carregarCustos()
    }, [props.mesAtual])

    const carregarCustos = async () => {
        setCustos()
        setCarregando(true)
        const custos = await buscarCustosDiversosDoMes(props.mesAtual)
        setCarregando(false)
        setCustos(custos)
    }

    const calcularTotal = () => {
        const soma = (t, v) => t + v
        const total = custos
            ? custos.map(g => +g.valor || 0).reduce(soma)
            : 0
        return numeroToMoeda(total)
    }

    const addCusto = async (newCusto) => {
        if (!newCusto.desc || !newCusto.desc.trim()) {
            Toast.show('Digite uma Descrição.', {
                position: Toast.position.TOP,
                containerStyle: { backgroundColor: 'red' },
                textStyle: { fontSize: 20, fontWeight: 'bold' }
            })
            return
        }
        if (!newCusto.valor) {
            Toast.show('Digite um Valor.', {
                position: Toast.position.TOP,
                containerStyle: { backgroundColor: 'red' },
                textStyle: { fontSize: 20, fontWeight: 'bold' }
            })
            return
        }
        setOpenModal(false)
        setCarregando(true)
        await cadastrarCustoDiverso(newCusto)
        carregarCustos()
    }

    const abrirModalEdit = (custoDiverso) => {
        setCusto(custoDiverso)
        setOpenModal(true)
    }

    const editarCusto = async (newCusto) => {
        setOpenModal(false)
        setCarregando(true)
        await editarCustoDiverso(newCusto)
        carregarCustos()
    }

    const deletarCusto = async (custoId) => {
        setCarregando(true)
        await deletarCustoDiverso(custoId)
        carregarCustos()
    }

    return (
        <View style={styles.container}>
            <ModalAddItem isVisible={openModal}
                onCancel={() => { setOpenModal(false), setCusto() }}
                onSave={addCusto}
                onEdit={editarCusto}
                custo={custo}
                title={'Custo Diverso'} />
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Total: </Text>
                <Text style={styles.money}>R$ {calcularTotal()}</Text>
            </View>
            <Carregando carregando={carregando} />
            {!custos && !carregando && <NoContent />}
            <FlatList data={custos}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) =>
                    <ItemCusto
                        id={item.id}
                        pago={item.pago}
                        desc={item.desc}
                        valor={item.valor}
                        dataPagamento={item.data}
                        onDelete={deletarCusto}
                        onEdit={abrirModalEdit} />}
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

export default CustosDiversosList