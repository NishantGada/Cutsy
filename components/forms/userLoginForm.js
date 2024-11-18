import { View, Text, StyleSheet, TouchableWithoutFeedback, Button, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../CustomButton';

const screenWidth = Dimensions.get('window').width;

export default function UserLoginForm({ handleNewUser, handleOnLogin }) {
    const [username, setUsername] = useState('gadanishant');
    const [password, setPassword] = useState('qwe');

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
            <View style={styles.loginButtonContainer}>
                {/* <TouchableOpacity style={styles.loginButton} onPress={() => handleOnLogin(username, password)}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
                </TouchableOpacity> */}
                <CustomButton buttonText="Login" onPressAction={() => handleOnLogin(username, password)} />
                <TouchableOpacity onPress={handleNewUser}>
                    <Text style={{ color: "gray", fontStyle: "italic", fontSize: 16 }} >New user?</Text>
                </TouchableOpacity>
            </View>
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
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 8,
    },
    picker: {
        height: 50,
        marginBottom: 20,
    },
    loginButtonContainer: {
        flexDirection: "column",
        alignItems: "center",
        rowGap: 20,
        marginTop: 10,
    }
});