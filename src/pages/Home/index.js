import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


export default class Home extends Component {

    render() {
        return (
            <View>
                <Text>Home screen</Text>
                <Button
                    title="Detail"
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
            </View>
        )
    }
}
