import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TextInput,
    Platform,
    TouchableOpacity,
} from 'react-native'
import Toast from 'react-native-tiny-toast'
import DateTimePicker from '@react-native-community/datetimepicker'
import { TextInputMask } from 'react-native-masked-text'
import moment from 'moment'
import CheckBox from '@react-native-community/checkbox'

import colors from '../../common/colors'

const ModalCartaoCredito = (props) => {
    const [desc, setDesc] = useState('')
    const [valor, setValor] = useState('')
    const [data, setData] = useState(new Date())
    const [repetirCusto, setRepetirCusto] = useState(1)
    const [numParcelas, setNumParcelas] = useState(1)
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [alterarApenasMesAtual, setAlterarApenasMesAtual] = useState(true)
    const [alterarProximosMeses, setAlterarProximosMeses] = useState(false)
    const [alterarTodosMeses, setAlterarTodosMeses] = useState(false)

    const setInitialState = () => {
        setDesc('')
        setValor('')
        setData(new Date())
        setRepetirCusto(1)
        setNumParcelas(1)
        setAlterarApenasMesAtual(true)
        setAlterarProximosMeses(false)
        setAlterarTodosMeses(false)
    }

    useEffect(() => {
        if (!props.custo) return
        setDesc(props.custo.desc)
        setValor(props.custo.valor)
        setData(new Date(props.custo.data))
        console.log(props.custo)
    }, [props.custo])

    const inputValor = useRef(null)

    const add = () => {
        const valorNumerico = inputValor.current.getRawValue()
        const newCusto = {
            desc: desc,
            valor: valorNumerico,
            data: data,
            repetirCusto: repetirCusto,
            qtdParcelas: numParcelas,
        }

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

        props.onSave && props.onSave(newCusto)
        setInitialState()
    }

    const edit = () => {
        const valorNumerico = inputValor.current.getRawValue()
        const newCusto = {
            id: props.custo && props.custo.id,
            descId: props.custo.custoFixoDescricao.id,
            desc: desc,
            valor: valorNumerico,
            data: data,
            repetirCusto: repetirCusto,
            qtdParcelas: numParcelas,
            alterarApenasMesAtual: alterarApenasMesAtual,
            alterarProximosMeses: alterarProximosMeses,
            alterarTodosMeses: alterarProximosMeses
        }

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

        props.onEdit && props.onEdit(newCusto)
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

    return (
        <Modal transparent={true} visible={props.isVisible}
            onRequestClose={cancel} animationType='fade' >
            <TouchableWithoutFeedback onPress={cancel}>
                <View style={styles.background} ></View>
            </TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.header}>
                    {props.custo ? 'Editar ' : 'Cadastrar '}{props.title}
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
                    {props.fixo &&
                        <TextInput style={[styles.input, { flex: 0.5 }]}
                            placeholder='Repetir'
                            value={repetirCusto + ''}
                            onChangeText={qtd => setRepetirCusto(qtd)}
                            keyboardType='numeric' />
                    }
                    {props.credito &&
                        <TextInput style={[styles.input, { flex: 0.6 }]}
                            placeholder='Nº parcelas'
                            value={numParcelas + ''}
                            onChangeText={qtd => setNumParcelas(qtd)}
                            keyboardType='numeric' />

                    }
                </View>
                {props.fixo &&
                    <>
                        <View style={styles.containerCheckbox}>
                            <CheckBox
                                disabled={false}
                                value={alterarApenasMesAtual}
                                onValueChange={(value) => {
                                    setAlterarApenasMesAtual(value),
                                        setAlterarProximosMeses(false),
                                        setAlterarTodosMeses(false)
                                }}
                            />
                            <Text style={styles.textCheckbox}>Editar atual</Text>
                        </View>
                        <View style={styles.containerCheckbox}>
                            <CheckBox
                                disabled={false}
                                value={alterarProximosMeses}
                                onValueChange={(value) => {
                                    setAlterarProximosMeses(value)
                                    setAlterarApenasMesAtual(false),
                                        setAlterarTodosMeses(false)
                                }}
                            />
                            <Text style={styles.textCheckbox}>Editar proximos</Text>

                        </View>
                        <View style={styles.containerCheckbox}>
                            <CheckBox
                                disabled={false}
                                value={alterarTodosMeses}
                                onValueChange={(value) => {
                                    setAlterarTodosMeses(value),
                                        setAlterarProximosMeses(false),
                                        setAlterarApenasMesAtual(false)
                                }}
                            />
                            <Text style={styles.textCheckbox}>Editar todos</Text>
                        </View>
                    </>
                }
                <View style={styles.containerDatePicker}>
                    {getDatePicker()}
                    <TouchableOpacity onPress={props.custo ? edit : add}>
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
    }
})

export default ModalCartaoCredito