import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

import colors from '../common/colors'

const MenuDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>My Wallet</Text>
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
            <DrawerItem
                label='Sair'
                activeBackgroundColor={colors.primary.light}
                activeTintColor={colors.primary.contrastText}
                labelStyle={styles.labelStyle}
                itemStyle={styles.itemStyle}
                icon={() => <Icon name='sign-out' size={30} color='#800' />}
                onPress={props.onSair} />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    containerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary.main,
        padding: 14,
        marginTop: -4
    },
    title: {
        color: colors.primary.contrastText,
        fontSize: 30,
        fontFamily: 'Lato-Light',
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
        margin: 4,
    },
    labelStyle: {
        fontSize: 25,
        fontFamily: 'Lato-Light',
    },
    itemStyle: {
        borderRadius: 0,
        width: '100%'
    }
})

export default MenuDrawer