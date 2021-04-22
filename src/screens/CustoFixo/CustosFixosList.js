import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import ItemCusto from '../../components/ItemCusto'
import BotaoAdd from '../../components/BotaoAdd'
import colors from '../../common/colors'
import ModalCustoFixo from './ModalCustoFixo'
import ModalDeletarCustoFixo from './ModalDeletarCustoFixo'
import NoContent from '../../components/NoContent'
import Carregando from '../../components/Carregando'
import calcularTotal from '../../common/calcularTotal'
import {
    buscarCustosFixoDoMes,
    cadastrarCustoFixo,
    editarCustoFixo,
    deletarCustoFixoMesAtual,
    deletarCustoFixoProximosMeses,
    deletarCustoFixoTodosMeses
} from '../../services/fixoService'

const CustosFixosList = (props) => {
    const [openModal, setOpenModal] = useState(false)
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [custos, setCustos] = useState()
    const [custo, setCusto] = useState()
    const [carregando, setCarregando] = useState(false)

    useEffect(() => {
        carregarCustos()
    }, [props.mesAtual])

    const carregarCustos = async () => {
        setCustos()
        setCarregando(true)
        const custos = await buscarCustosFixoDoMes(props.mesAtual)
        setCarregando(false)
        setCustos(custos)
    }

    const addCusto = async (newCusto) => {
        setOpenModal(false)
        setCarregando(true)
        await cadastrarCustoFixo(newCusto)
        setCusto()
        carregarCustos()
    }

    const abrirModalEdit = (custo) => {
        setCusto(custo)
        setOpenModal(true)
    }

    const abrirModalDelete = (custo) => {
        setCusto(custo)
        setOpenModalDelete(true)
    }

    const editarCusto = async (newCusto) => {
        setOpenModal(false)
        setCarregando(true)
        await editarCustoFixo(newCusto)
        setCusto()
        carregarCustos()
    }

    const deletarCustoAtual = async (custo) => {
        setCarregando(true)
        await deletarCustoFixoMesAtual(custo.id)
        setCusto()
        carregarCustos()
    }

    const deletarCustoProximos = async (custo) => {
        setCarregando(true)
        await deletarCustoFixoProximosMeses(custo.id)
        setCusto()
        carregarCustos()
    }

    const deletarCustoTodos = async (custo) => {
        setCarregando(true)
        await deletarCustoFixoTodosMeses(custo.id)
        setCusto()
        carregarCustos()
    }

    return (
        <View style={styles.container}>
            <ModalCustoFixo isVisible={openModal}
                onCancel={() => { setOpenModal(false), setCusto() }}
                onSave={addCusto}
                onEdit={editarCusto}
                custo={custo} />
            <ModalDeletarCustoFixo isVisible={openModalDelete}
                onCancel={() => { setOpenModalDelete(false), setCusto() }}
                custo={custo}
                onDeleteAtual={deletarCustoAtual}
                onDeleteProximos={deletarCustoProximos}
                onDeleteTodos={deletarCustoTodos}
            />
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
                        data={item.data}
                        desc={item.custoFixoDescricao.desc}
                        valor={item.valor}
                        pago={item.pago}
                        custo={item}
                        onEdit={abrirModalEdit}
                        onDelete={abrirModalDelete}
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

export default CustosFixosList