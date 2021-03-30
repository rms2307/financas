import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MenuStack from '../components/MenuStack'
import Resumo from '../components/Resumo'
import CustosFixos from '../components/CustosFixosList'
import CustosDiversos from '../components/CustosDiversosList'

const StackNavigator = createStackNavigator()

const Stack = (props) => {
    const mesAtual = props.mesAtual
    return (
        <StackNavigator.Navigator initialRouteName={'Resumo'} headerMode='none'>
            <StackNavigator.Screen name='Resumo'
                options={{ title: 'Resumo' }}>
                {props => (
                    <MenuStack
                        {...props} cusFix='CustosFixos' cusDiv='CustosDiversos'>
                        <Resumo mesAtual={mesAtual} />
                    </MenuStack>
                )}
            </StackNavigator.Screen>
            <StackNavigator.Screen name='CustosFixos'>
                {props => (
                    <MenuStack
                        {...props} res='Resumo' cusDiv='CustosDiversos'>
                        <CustosFixos mesAtual={mesAtual} />
                    </MenuStack>
                )}
            </StackNavigator.Screen>
            <StackNavigator.Screen name='CustosDiversos'>
                {props => (
                    <MenuStack
                        {...props} res='Resumo' cusFix='CustosFixos'>
                        <CustosDiversos mesAtual={mesAtual} />
                    </MenuStack>
                )}
            </StackNavigator.Screen>
        </StackNavigator.Navigator>
    )
}

export default Stack