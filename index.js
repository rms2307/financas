import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import Month from './src/screens/Month'
import CreditCard from './src/screens/CreditCard'

AppRegistry.registerComponent(appName, () => CreditCard);
