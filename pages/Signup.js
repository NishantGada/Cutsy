import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import UserSignupForm from '../components/forms/userSignupForm'
import sampleUsers from '../utils/sampleUsers.json';
import sendRequest from '../utils/sendRequest';

export default function Signup({ navigation }) {

    const handleOnSignup = async () => {
        try {
            var response = await sendRequest(
                "http://192.168.29.188:8080/create-user",
                sampleUsers[1],                
                "POST",
                {}
            )

            navigation.navigate('Login')
        } catch (error) {
            console.log("error: " + error);
        }
    }

    return (
        <View style={styles.container}>
            <Text>Signup Screen</Text>
            {/* <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Main')}
            /> */}
            {/* <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            /> */}
            <UserSignupForm handleOnSignup={handleOnSignup} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20
    },
})