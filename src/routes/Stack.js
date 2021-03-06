import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MenuStack from '../components/MenuStack'
import Resumo from '../components/Resumo'
import CustosFixos from '../components/CustosFixosList'
import CustosDiversos from '../components/CustosDiversosList'

const StackNavigator = createStackNavigator()

const Stack = (props) => {
    return (
        <StackNavigator.Navigator initialRouteName={'Resumo'} headerMode='none'>
            <StackNavigator.Screen name='Resumo'
                options={{ title: 'Resumo' }}>
                {props => (
                    <MenuStack
                        {...props} cusFix='CustosFixos' cusDiv='CustosDiversos'>
                        <Resumo />
                    </MenuStack>
                )}
            </StackNavigator.Screen>
            <StackNavigator.Screen name='CustosFixos'>
                {props => (
                    <MenuStack
                        {...props} res='Resumo' cusDiv='CustosDiversos'>
                        <CustosFixos />
                    </MenuStack>
                )}
            </StackNavigator.Screen>
            <StackNavigator.Screen name='CustosDiversos'>
                {props => (
                    <MenuStack
                        {...props} res='Resumo' cusFix='CustosFixos'>
                        <CustosDiversos />
                    </MenuStack>
                )}
            </StackNavigator.Screen>
        </StackNavigator.Navigator>
    )
}

export default Stack