import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import UserSignupForm from '../components/forms/userSignupForm'

export default function Signup({ navigation }) {

    const handleOnSignup = () => {navigation.navigate('Login')}

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