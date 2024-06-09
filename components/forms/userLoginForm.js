import { View, Text, StyleSheet, TouchableWithoutFeedback, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';

export default function UserLoginForm({ handleNewUser, handleOnLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <View>
                <Text>Username:</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <View>
                <Text>Password:</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <Button style={styles.button} title="Login" onPress={handleOnLogin} />
            <TouchableWithoutFeedback onPress={handleNewUser}>
                <Text>New user?</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 100
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
    picker: {
        height: 50,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "green"
    }
});