import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Header from '../components/Header'
import ModalMeses from '../components/ModalMeses'
import Stack from '../routes/Stack'

import colors from '../common/colors'

const Month = () => {

    const getMesAtual = () => {
        let mes = new Date()
        switch (mes.getMonth()) {
            case 0: return 'Janeiro'
            case 1: return 'Fevereiro'
            case 2: return 'Março'
            case 3: return 'Abril'
            case 4: return 'Maio'
            case 5: return 'Junho'
            case 6: return 'Julho'
            case 7: return 'Agosto'
            case 8: return 'Setembro'
            case 9: return 'Outubro'
            case 10: return 'Novembro'
            case 11: return 'Dezembro'
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
            <Header mesAtual={mesAtual} onOpenModal={() => setOpenModal(true)} />
            <SafeAreaView style={styles.container}>
                <ModalMeses isVisible={openModal}
                    onCancel={() => setOpenModal(false)}
                    onSetMesAtual={(mes) => onSetMesAtual(mes)} />
                <Stack />
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

export default Month