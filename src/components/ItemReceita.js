import React, { useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import moment from 'moment'
import 'moment/locale/pt-br'

import colors from '../common/colors'
import numeroToMoeda from '../common/numeroToMoeda'

const ItemReceita = (props) => {

    const swipeable = useRef(null)

    const dataRecebimento = props.data || moment()
    const dia = moment(dataRecebimento).locale('pt-br').format('DD')
    const mes = moment(dataRecebimento).locale('pt-br').format('MMM')

    const getTipoDeReceita = () => {
        switch (props.tipoDeReceita) {
            case 1:
                return 'Salario'
            case 2:
                return 'Investimento'
            case 3:
                return 'Outros'
            default:
                return 'Outros';
        }
    }

    const renderActionRemover = () => {
        return (
            <TouchableOpacity style={styles.action}
                onPress={
                    () => { props.onDelete && props.onDelete(props.receita), swipeable.current.close() }
                }>
                <Icon name="trash" size={25} color='#FFF' />
            </TouchableOpacity>
        )
    }

    const renderActionEditar = () => {
        return (
            <TouchableOpacity style={[styles.action, { backgroundColor: colors.receitas }]}
                onPress={
                    () => { props.onEdit && props.onEdit(props.receita), swipeable.current.close() }
                }>
                <Icon name="edit" size={25} color='#FFF' />
            </TouchableOpacity>
        )
    }

    return (
        <Swipeable
            renderRightActions={renderActionRemover}
            renderLeftActions={renderActionEditar}
            overshootLeft={false}
            overshootRight={false}
            ref={swipeable}
        >
            <TouchableOpacity style={styles.container}>
                <View style={styles.labelsContainer}>
                    <View style={[{ backgroundColor: colors.receitas, height: '100%', width: 10 }]}></View>
                    <View style={styles.containerData}>
                        <Text style={styles.textData}>{dia}</Text>
                        <Text style={styles.textData}>{mes}</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.title}>{getTipoDeReceita()}</Text>
                    </View>
                </View>
                <Text style={[styles.money]}>
                    R$ {numeroToMoeda(props.valor)}
                </Text>
            </TouchableOpacity>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    money: {
        fontSize: 22,
        marginLeft: 5,
        marginTop: 12,
        fontWeight: 'bold',
    },
    containerData: {
        marginLeft: 5,
        padding: 5,
        alignItems: 'center'
    },
    textData: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    action: {
        backgroundColor: colors.despesas,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 15
    }
})

export default ItemReceita