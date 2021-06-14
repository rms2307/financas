import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

const MenuDrawer = (props) => {

    return (
        <ScrollView>
            <Text>My Wallet</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
    }
})

export default MenuDrawer