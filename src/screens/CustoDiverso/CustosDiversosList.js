import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import ItemCusto from '../../components/ItemCusto'
import BotaoAdd from '../../components/BotaoAdd'
import ModalCustoDiverso from '../CustoDiverso/ModalCustoDiverso'
import NoContent from '../../components/NoContent'
import Carregando from '../../components/Carregando'
import colors from '../../common/colors'
import calcularTotal from '../../common/calcularTotal'
import {
    buscarCustosDiversosDoMes,
    cadastrarCustoDiverso,
    deletarCustoDiverso,
    editarCustoDiverso,
} from '../../services/diversoService'

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

    const addCusto = async (newCusto) => {
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

    const deletarCusto = async (custo) => {
        setCarregando(true)
        await deletarCustoDiverso(custo.id)
        carregarCustos()
    }

    return (
        <View style={styles.container}>
            <ModalCustoDiverso isVisible={openModal}
                onCancel={() => { setOpenModal(false), setCusto() }}
                onSave={addCusto}
                onEdit={editarCusto}
                custo={custo} />
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Total: </Text>
                <Text style={styles.money}>R$ {calcularTotal(custos)}</Text>
            </View>
            <Carregando carregando={carregando} />
            {!custos && !carregando && <NoContent />}
            <FlatList data={custos}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) =>
                    <ItemCusto
                        pago={item.pago}
                        desc={item.desc}
                        valor={item.valor}
                        data={item.data}
                        custo={item}
                        onDelete={deletarCusto}
                        onEdit={abrirModalEdit} 
                    />}
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