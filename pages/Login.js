import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import UserLoginForm from '../components/forms/userLoginForm'
import sendRequest from '../utils/sendRequest';

export default function Login({ navigation }) {
    const handleNewUser = () => {
        navigation.navigate('Signup');
    }

    const handleOnLogin = async (username, password) => {
        if (username !== null && password !== null) {
            console.log("username: ", username);
            console.log("password: ", password);

            try {
                const response = await sendRequest("http://192.168.29.188:8080/validate-login", {
                    "username": "gadanishant",
                    "password": password
                },
                    "POST",
                    {}
                )

                console.log("response.data: ", response.data)
                if (response.data) {
                    navigation.navigate('Main') 
                } else {
                    navigation.navigate('Login')
                    alert("Invalid username or password")
                }
                // setUser(response.data)
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Invalid username or password")
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.loginHeader}>
                <Text style={{ fontStyle: "italic", fontWeight: "bold", fontSize: 24, marginBottom: 10 }}>Login</Text>
            </View>
            <UserLoginForm
                handleNewUser={handleNewUser}
                handleOnLogin={handleOnLogin}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loginHeader: {
        marginTop: 20
    }
})