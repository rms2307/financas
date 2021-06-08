import React, { useState, useRef, useEffect } from 'react'
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TextInput,
    Platform,
    TouchableOpacity
} from 'react-native'
import Toast from 'react-native-tiny-toast'
import DateTimePicker from '@react-native-community/datetimepicker'
import { TextInputMask } from 'react-native-masked-text'
import moment from 'moment'
import { Picker } from '@react-native-picker/picker'

import colors from '../../common/colors'

const ModalCartaoCredito = (props) => {
    const [desc, setDesc] = useState('')
    const [valor, setValor] = useState('')
    const [valorParcela, setValorParcela] = useState('')
    const [data, setData] = useState(new Date())
    const [numeroDeParcelas, setNumeroDeParcelas] = useState(1)
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [cartao, setCartao] = useState(0)

    const setInitialState = () => {
        setDesc('')
        setValor('')
        setValorParcela('')
        setData(new Date())
        setNumeroDeParcelas(1)
        setCartao(0)
    }

    const inputValor = useRef(null)

    const add = () => {
        const valorNumerico = inputValor.current.getRawValue()
        const newGasto = {
            desc: desc,
            valor: valorNumerico,
            dataCompra: data,
            numeroDeParcelas: numeroDeParcelas,
            cartaoCreditoId: cartao
        }

        if (!newGasto.desc || !newGasto.desc.trim()) {
            Toast.show('Digite uma Descrição.', {
                position: Toast.position.TOP,
                containerStyle: { backgroundColor: 'red' },
                textStyle: { fontSize: 20, fontWeight: 'bold' }
            })
            return
        }
        if (!newGasto.valor) {
            Toast.show('Digite um Valor.', {
                position: Toast.position.TOP,
                containerStyle: { backgroundColor: 'red' },
                textStyle: { fontSize: 20, fontWeight: 'bold' }
            })
            return
        }
        if (newGasto.cartaoCreditoId == undefined || newGasto.cartaoCreditoId == 0) {
            Toast.show('Escolha um Cartão.', {
                position: Toast.position.TOP,
                containerStyle: { backgroundColor: 'red' },
                textStyle: { fontSize: 20, fontWeight: 'bold' }
            })
            return
        }

        props.onSave && props.onSave(newGasto)
        setInitialState()
    }

    const cancel = () => {
        setInitialState()
        props.onCancel()
    }

    getDatePicker = () => {
        let datePicker = <DateTimePicker value={data}
            onChange={(_, date) => { setShowDatePicker(false), setData(date) }}
            mode='date' />

        const dateString = moment(data).format('ddd, D [de] MMM [de] YYYY')

        if (Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity
                        onPress={() => setShowDatePicker(true)}>
                        <Text style={styles.date}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {showDatePicker && datePicker}
                </View>
            )
        }
        return datePicker
    }

    getBandeiraString = (bandeiraId) => {
        switch (bandeiraId) {
            case 1:
                return "Visa"
            case 2:
                return "Master Card"
            case 3:
                return "Elo"
            case 4:
                return "Hipercard"
            case 5:
                return "Diners Club"
            case 6:
                return "American Express"
            default:
                return "Bandeira"
        }
    }

    return (
        <Modal transparent={true} visible={props.isVisible}
            onRequestClose={cancel} animationType='fade' >
            <TouchableWithoutFeedback onPress={cancel}>
                <View style={styles.background} ></View>
            </TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.header}>
                    {props.gasto ? 'Editar Gasto ' : 'Cadastrar Gasto '}
                </Text>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <TextInput style={styles.input}
                        placeholder='Descrição'
                        value={desc}
                        onChangeText={desc => setDesc(desc)} />
                    <TextInputMask style={styles.input}
                        type={'money'}
                        placeholder='Valor (R$)'
                        value={valor}
                        onChangeText={valor => setValor(valor)}
                        ref={inputValor}
                    />
                    <TextInput style={[styles.input, { flex: 0.6 }]}
                        placeholder='Nº parcelas'
                        value={numeroDeParcelas + ''}
                        onChangeText={qtd => setNumeroDeParcelas(qtd)}
                        keyboardType='numeric' />
                </View>
                <View>
                    <Picker
                        itemStyle={styles.cartaoItemPicker}
                        selectedValue={cartao}
                        style={styles.cartaoPicker}
                        onValueChange={(itemValue, itemIndex) => setCartao(itemValue)}
                    >
                        <Picker.Item style={styles.cartaoItemPicker}
                            label="Escolha um Cartão:" value={0}
                        />
                        {props.cartoes && props.cartoes.map(c => (
                            <Picker.Item
                                style={styles.cartaoItemPicker}
                                key={c.id}
                                label={getBandeiraString(c.bandeira)}
                                value={c.id}
                            />
                        ))}
                    </Picker>
                </View>
                <View style={styles.containerDatePicker}>
                    {getDatePicker()}
                    <TouchableOpacity onPress={props.gasto ? edit : add}>
                        <Text style={styles.btn}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={cancel}>
                <View style={styles.background} ></View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    container: {
        backgroundColor: colors.secondary.light,
    },
    containerCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6
    },
    textCheckbox: {
        fontSize: 18
    },
    header: {
        backgroundColor: colors.secondary.dark,
        color: colors.secondary.contrastText,
        textAlign: 'center',
        padding: 15,
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6,
        fontSize: 18
    },
    date: {
        fontSize: 25,
    },
    containerDatePicker:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 15
    },
    btn: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.secondary.contrastText,
        backgroundColor: colors.secondary.dark,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    textCustoRec: {
        flex: 1,
        fontSize: 25,
    },
    cartaoPicker:
    {
        height: 50,
        flexDirection: 'row',
        fontSize: 50,
    },
    cartaoItemPicker:
    {
        fontSize: 20,
    }
})

export default ModalCartaoCredito