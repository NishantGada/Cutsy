import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
// import ButtonTheme from '../components/ButtonTheme';
import sendRequest from '../utils/sendRequest';
import CustomButton from '../components/CustomButton';

export default function Profile({ navigation }) {
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

    return (
        <SafeAreaView style={styles.ProfileContainer}>
            <Text>Profile</Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text>Logout</Text>
            </TouchableOpacity> */}
            <CustomButton buttonText="Logout" onPressAction={() => navigation.navigate("Login")} />
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