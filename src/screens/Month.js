import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
    View,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import Header from '../components/Header'
import ModalMeses from '../components/ModalMeses'
import CustosFixosList from '../components/CustosFixosList'
import CustosDiversosList from '../components/CustosDiversosList'

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
            <View style={styles.container}>
                <ModalMeses isVisible={openModal}
                    onCancel={() => setOpenModal(false)}
                    onSetMesAtual={(mes) => onSetMesAtual(mes)} />
                {/* <Summary
                    mes={mesAtual}
                    saldo={1000}
                    receita={1000}
                    despesaFixa={100}
                    despesaDiversa={150}
                    cartao={850}
                /> */}
                {/* <CustosFixosList mes={mesAtual} /> */}

                <CustosDiversosList />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lighter,
    }
})

export default Month