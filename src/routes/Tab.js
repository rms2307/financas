import React, { useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Month from '../screens/Month'
import CreditCard from '../screens/CreditCard'
import Header from '../components/Header'
import ModalMeses from '../components/ModalMeses'

import colors from '../common/colors'
import getMesAtual from '../common/getMesAtual'

const TabNavigator = createBottomTabNavigator();

const Tab = (props) => {

    const [openModal, setOpenModal] = useState(false)
    const [mesAtual, setMesAtual] = useState(getMesAtual())

    const onSetMesAtual = (mes) => {
        setMesAtual(mes)
        setOpenModal(false)
    }

    return (
        <SafeAreaView style={{ flexGrow: 1 }}>
            <StatusBar backgroundColor={colors.primary.dark} />
            <Header {...props} mesAtual={mesAtual.mes} onOpenModal={() => setOpenModal(true)} />
            <ModalMeses isVisible={openModal}
                onCancel={() => setOpenModal(false)}
                onSetMesAtual={(mes) => onSetMesAtual(mes)} />
            <TabNavigator.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => {
                        let iconName;
                        switch (route.name) {
                            case 'Month':
                                iconName = focused
                                    ? 'wallet'
                                    : 'wallet-outline'
                                break
                            case 'CreditCard':
                                iconName = focused
                                    ? 'card'
                                    : 'card-outline'
                                break
                        }
                        return <Ionicons name={iconName} size={35} color={color} />
                    },
                })}
                tabBarOptions={{
                    activeTintColor: colors.primary.main,
                    inactiveTintColor: colors.primary.main,
                    showLabel: false,
                }}
                initialRouteName='Month'>
                <TabNavigator.Screen name='Month'>
                    {(props) => (
                        <Month {...props} mesAtual={mesAtual.num} />
                    )}
                </TabNavigator.Screen>
                <TabNavigator.Screen name='CreditCard'>
                    {(props) => (
                        <CreditCard {...props} mesAtual={mesAtual.num} />
                    )}
                </TabNavigator.Screen>
            </TabNavigator.Navigator>
        </SafeAreaView>
    )
}

export default Tab