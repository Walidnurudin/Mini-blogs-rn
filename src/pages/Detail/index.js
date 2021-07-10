import axios from 'axios'
import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Detail extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    deleteBlog(id) {
        axios.delete('https://mini-blogs-app.herokuapp.com/api/blogs/' + id)
            .then(res => res.data)
            .catch(err => console.log(err));
    }

    render() {
        return (
            <View>
                <Text>Detail Screen</Text>
            </View>
        )
    }
}
