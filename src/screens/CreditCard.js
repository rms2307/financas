import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from 'react-native'

import Header from '../components/Header'
import ModalMeses from '../components/ModalMeses'
import CartaoCredito from '../screens/CartaoCredito/CartaoCreditoList'

import colors from '../common/colors'

const CreditCard = () => {

    const getMesAtual = () => {
        let mes = new Date()
        switch (mes.getMonth()) {
            case 0: return { num: 1, mes: 'Janeiro' }
            case 1: return { num: 2, mes: 'Fevereiro' }
            case 2: return { num: 3, mes: 'Março' }
            case 3: return { num: 4, mes: 'Abril' }
            case 4: return { num: 5, mes: 'Maio' }
            case 5: return { num: 6, mes: 'Junho' }
            case 6: return { num: 7, mes: 'Julho' }
            case 7: return { num: 8, mes: 'Agosto' }
            case 8: return { num: 9, mes: 'Setembro' }
            case 9: return { num: 10, mes: 'Outubro' }
            case 10: return { num: 11, mes: 'Novembro' }
            case 11: return { num: 12, mes: 'Dezembro' }
        }
    }

    const [openModal, setOpenModal] = useState(false)
    const [mesAtual, setMesAtual] = useState(getMesAtual())

    const onSetMesAtual = (mes) => {
        setMesAtual(mes)
        setOpenModal(false)
    }

    return (
        <>
            <StatusBar backgroundColor={colors.primary.dark} />
            <Header mesAtual={mesAtual.mes} onOpenModal={() => setOpenModal(true)} />
            <SafeAreaView style={styles.container}>
                <ModalMeses isVisible={openModal}
                    onCancel={() => setOpenModal(false)}
                    onSetMesAtual={(mes) => onSetMesAtual(mes)} />
                <CartaoCredito mesAtual={mesAtual.num} />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    }
})

export default CreditCard