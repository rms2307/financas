import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MenuStack from '../components/MenuStack'
import CustosFixos from '../screens/CustoFixo/CustosFixosList'
import CustosDiversos from '../screens/CustoDiverso/CustosDiversosList'

const StackNavigator = createStackNavigator()

const Stack = (props) => {
    const { mesAtual } = props
    return (
        <StackNavigator.Navigator initialRouteName={'CustosFixos'} headerMode='none'>
            <StackNavigator.Screen name='CustosFixos'>
                {props => (
                    <MenuStack
                        {...props} cusDiv='CustosDiversos'>
                        <CustosFixos mesAtual={mesAtual} />
                    </MenuStack>
                )}
            </StackNavigator.Screen>
            <StackNavigator.Screen name='CustosDiversos'>
                {props => (
                    <MenuStack
                        {...props} cusFix='CustosFixos'>
                        <CustosDiversos mesAtual={mesAtual} />
                    </MenuStack>
                )}
            </StackNavigator.Screen>
        </StackNavigator.Navigator>
    )
}

export default Stack