import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Tab from './Tab'
import Auth from '../screens/Auth/Auth'
import AuthOrApp from '../screens/Auth/AuthOrApp'

const mainRoutes = {
    AuthOrApp: {
        name: 'AuthOrApp',
        screen: AuthOrApp
    },
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Tab: {
        name: 'Tab',
        screen: Tab
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'AuthOrApp'
})

export default createAppContainer(mainNavigator)