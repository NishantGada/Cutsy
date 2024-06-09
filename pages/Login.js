import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import UserLoginForm from '../components/forms/userLoginForm'

export default function Login({ navigation }) {
    const handleNewUser = () => {
        navigation.navigate('Signup');
    }

    const handleOnLogin = () => {
        navigation.navigate('Main');
    }

    return (
        <View>
            <View style={styles.loginHeader}>
                {/* <Button
                    title="<"
                    onPress={() => navigation.navigate('Signup')}
                /> */}
                <Text>Login</Text>
            </View>
            <UserLoginForm handleNewUser={handleNewUser} handleOnLogin={handleOnLogin} />
        </View>
    )
}

const styles = StyleSheet.create({
    loginHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
})