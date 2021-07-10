import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 2500)
    })

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 40,
                color: 'blue'
            }}>
                Welcome
            </Text>
        </View>
    )
}

export default Splash;