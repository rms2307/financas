import React, { useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Custos from '../screens/Custos'
import CreditCard from '../screens/CreditCard'
import Header from '../components/Header'
import ModalMeses from '../components/ModalMeses'
import Resumo from '../components/Resumo'

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
            <Header {...props} showBtnMeses={true} mesAtual={mesAtual.mes} onOpenModal={() => setOpenModal(true)} />
            <ModalMeses isVisible={openModal}
                onCancel={() => setOpenModal(false)}
                onSetMesAtual={(mes) => onSetMesAtual(mes)} />
            <TabNavigator.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => {
                        let iconName;
                        switch (route.name) {
                            case 'Resumo':
                                iconName = focused
                                    ? 'home'
                                    : 'home-outline'
                                break
                            case 'Custos':
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
                initialRouteName='Resumo'>
                <TabNavigator.Screen name='Resumo'>
                    {(props) => (
                        <Resumo {...props} mesAtual={mesAtual.num} />
                    )}
                </TabNavigator.Screen>
                <TabNavigator.Screen name='Custos'>
                    {(props) => (
                        <Custos {...props} mesAtual={mesAtual.num} />
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