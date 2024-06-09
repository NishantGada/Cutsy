import { View, Text, StyleSheet, SafeAreaView, Button, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import sendRequest from '../utils/sendRequest';
import sampleUsers from '../utils/sampleUsers.json';

export default function Profile() {
    const [message, setMessage] = useState();
    const [user, setUser] = useState({});

    const getProfileDetailsAPI = async () => {
        try {
            const response = await sendRequest("http://192.168.29.188:8080/profile-details", {}, "GET", {})
            console.log(response.data)
            // setMessage(response.data)
            setUser(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const onPress = async () => {
        try {
            const response = await sendRequest(
                "http://192.168.29.188:8080/create-user",
                sampleUsers[1],                
                "POST",
                {}
            )
        } catch (error) {

        }
    }

    /*
    useEffect(() => {
        getProfileDetailsAPI();
    }, [])
    */

    return (
        <SafeAreaView style={styles.ProfileContainer}>
            <Text>Profile</Text>
            <Text>{message}</Text>
            <Text>{user.firstName}</Text>
            <Text>{user.lastName}</Text>

            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>Send</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ProfileContainer: {
        backgroundColor: "white",
        flex: 1
    },

    button: {
        marginTop: 100,
    }
})