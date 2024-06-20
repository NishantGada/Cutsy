import { View, Text, Button, StyleSheet, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react'
import UserSignupForm from '../components/forms/userSignupForm'
import sampleUsers from '../utils/sampleUsers.json';
import sendRequest from '../utils/sendRequest';

const screenWidth = Dimensions.get('window').width;

export default function Signup({ navigation }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }

    const callCreateUserAPI = async () => {
        try {
            var response = await sendRequest(
                "http://192.168.29.188:8080/create-user",
                sampleUsers[1],
                "POST",
                {}
            )

            console.log("callCreateUserAPI response: ", response);
            navigation.navigate('Login')
        } catch (error) {
            console.log("callCreateUserAPI error: " + error);
        }
    }

    const handleOnSignup = () => {
        console.log("Inside handleOnSignup");
        openModal()
        setTimeout(() => {
            closeModal()
            callCreateUserAPI()
        }, 1000 * 2);
    }

    const handleExistingUser = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <Modal
                    visible={showModal}
                    transparent={true}
                    animationType="slide"
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.newAppointmentModal}>
                            <Text>Successfully Logged in!</Text>
                        </View>
                    </View>
                </Modal>
            </View>
            <Text>Signup Screen</Text>
            <UserSignupForm handleOnSignup={handleOnSignup} handleExistingUser={handleExistingUser} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        backgroundColor: "white",
        rowGap: 10
    },
    modalContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    newAppointmentModal: {
        backgroundColor: 'white',
        width: screenWidth * 0.9,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
    }
})