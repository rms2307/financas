import React from 'react'
import { TouchableOpacity, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import colors from '../common/colors'

const BotaoAdd = (props) => {
    return (
        <TouchableOpacity style={styles.addButton} activeOpacity={0.7}
            onPress={props.onOpenModal} >
            <Icon name='plus' size={20}
                color={'#fff'} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginTop: Platform.OS === 'ios' ? 40 : 10
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary.dark
    }
})

export default BotaoAdd