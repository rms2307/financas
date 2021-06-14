import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'

import colors from '../common/colors'

const MenuDrawer = (props) => {

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>MY WALLET</Text>
                <View style={styles.icon}>
                    <Icon name='user' size={80} color={'#FFF'} />
                </View>
            </View>
            <DrawerItemList
                activeBackgroundColor={colors.primary.light}
                activeTintColor={colors.primary.contrastText}
                labelStyle={styles.labelStyle}
                itemStyle={styles.itemStyle}
                {...props} />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    containerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary.light,
        padding: 14,
        marginTop: -4
    },
    title: {
        color: colors.primary.contrastText,
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: "Righteous",
        margin: 8,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF',
        width: 120,
        height: 120,
        borderRightWidth: 6,
        borderBottomWidth: 4,
        borderColor: '#FFF',
        borderRadius: 60,
        margin: 4
    },
    labelStyle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    itemStyle: {
        borderRadius: 0,
        width: '100%'
    }
})

export default MenuDrawer