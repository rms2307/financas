import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import BotaoAdd from '../../components/BotaoAdd'
import NoContent from '../../components/NoContent'
import Carregando from '../../components/Carregando'
import ItemReceita from '../../components/ItemReceita'

import colors from '../../common/colors'
import calcularTotal from '../../common/calcularTotal'
import { buscarReceitasDoMes, deletarReceita } from '../../services/receitasService'

const ReceitasList = (props) => {
    const [carregando, setCarregando] = useState(false)
    const [receitas, setReceitas] = useState(false)

    useEffect(() => {
        _carregarReceitas()
    }, [props.mesAtual])

    const _carregarReceitas = async () => {
        setReceitas()
        setCarregando(true)
        var receitas = await buscarReceitasDoMes(props.mesAtual)
        setCarregando(false)
        setReceitas(receitas)
    }

    const _deletarReceita = async (receita) => {
        setCarregando(true)
        await deletarReceita(receita.id)
        setCarregando(false)
        _carregarReceitas()
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Total: </Text>
                <Text style={styles.money}>R$ {calcularTotal(receitas)}</Text>
            </View>
            <Carregando carregando={carregando} />
            {!receitas && !carregando && <NoContent />}
            <FlatList data={receitas}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) =>
                    <ItemReceita
                        data={item.dataRecebimento}
                        tipoDeReceita={item.tipoDeReceita}
                        valor={item.valor}
                        receita={item}
                        onDelete={_deletarReceita}
                        onEdit={() => console.log('edit')}
                    />}
            />
            <BotaoAdd onOpenModal={() => console.log("Add")} />
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

export default ReceitasList