import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Profile from '../screens/Auth/Profile'
import Tab from './Tab'

import colors from '../common/colors'

const DrawerNavigator = createDrawerNavigator()

const Drawer = (props) => {
    return (
        <SafeAreaView style={{ flexGrow: 1, backgroundColor: colors.background }}>
            <NavigationContainer>
                <DrawerNavigator.Navigator initialRouteName='Tab'>
                    <DrawerNavigator.Screen name='Profile' >
                        {(props) => (
                            <Profile {...props} />
                        )}
                    </DrawerNavigator.Screen>
                    <DrawerNavigator.Screen name='Tab' >
                        {(props) => (
                            <Tab {...props} />
                        )}
                    </DrawerNavigator.Screen>
                </DrawerNavigator.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Drawer