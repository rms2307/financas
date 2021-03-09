import React, { useState } from 'react'
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
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'

import colors from '../common/colors'

const ModalAddItem = (props) => {
    const [desc, setDesc] = useState('')
    const [valor, setValor] = useState('')
    const [data, setData] = useState(new Date())

    const [showDatePicker, setShowDatePicker] = useState(false)
    
    const add = () => {
        const newCusto = {
            id: Math.random(),
            desc: desc,
            valor: valor,
            data: data
        }

        props.onSave && props.onSave(newCusto)
        setDesc('')
        setValor('')
        setData(new Date())
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
            onRequestClose={props.onCancel} animationType='fade' >
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.background} ></View>
            </TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.header}>{props.title}</Text>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <TextInput style={styles.input}
                        placeholder='Descrição'
                        value={desc}
                        onChangeText={desc => setDesc(desc)} />
                    <TextInput style={styles.input}
                        placeholder='Valor (R$)'
                        value={valor}
                        onChangeText={valor => setValor(valor)}
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.containerDatePicker}>
                    {getDatePicker()}
                    <TouchableOpacity onPress={add}>
                        <Text style={styles.btn}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={props.onCancel}>
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
    }
})

export default ModalAddItem