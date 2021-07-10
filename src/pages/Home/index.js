import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('https://mini-blogs-app.herokuapp.com/api/blogs')
            .then(res => res.data)
            .then(res => {
                this.setState({
                    data: res
                })
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <View>
                <Text>Home screen</Text>
                <View>
                    {this.state.data.map((item, index) => {
                        return (
                            <View key={index} style={{borderBottomWidth: 3, padding: 5}}>
                                <Text style={{
                                    fontSize: 30
                                }}>
                                    {item.title}
                                </Text>
                                <Text>
                                    {item.snippet}
                                </Text>
                            </View>
                        )
                    })}
                </View>
                <Button
                    title="Detail"
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
            </View>
        )
    }
}
