import React from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";
import axios from "axios";

const Create = () => {
    const [title, setTitle] = React.useState("");
    const [snippet, setSnippet] = React.useState("");
    const [body, setBody] = React.useState("");

    const Post = () => {
        const data = {
            title,
            snippet,
            body
        }
        console.log("Before ", data)
        axios.post('https://mini-blogs-app.herokuapp.com/api/create', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                value={title}
                placeholder="Input Title"
            />
            <TextInput
                style={styles.input}
                onChangeText={setSnippet}
                value={snippet}
                placeholder="Input Snippet"
            />
            <TextInput
                style={styles.input}
                onChangeText={setBody}
                value={body}
                placeholder="Input Body"
            />
            <Button
                title="Create"
                onPress={() => Post()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 2,
        margin: 5
    }
})

export default Create;