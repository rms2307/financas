import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Month from '../screens/Month'
import CreditCard from '../screens/CreditCard'
import colors from '../common/colors'

const TabNavigator = createBottomTabNavigator();

const Tab = (props) => {
    return (
        <SafeAreaView style={{ flexGrow: 1 }}>
            <NavigationContainer>
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
                    <TabNavigator.Screen name='Month' component={Month} />
                    <TabNavigator.Screen name='CreditCard' component={CreditCard} />
                </TabNavigator.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Tab