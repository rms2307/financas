import React from 'react'
import { View, Text } from 'react-native'

import Header from '../../components/Header'

const Profile = (props) => {
    return (
        <View>
            <Header {...props} />
            <Text>Profile</Text>
        </View>
    )
}

export default Profile