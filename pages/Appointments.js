import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ButtonTheme from '../components/buttonTheme';

const screenWidth = Dimensions.get('window').width;

export default function Appointments() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <SafeAreaView style={styles.appointmentsContainer}>
            <View style={styles.modalContainer}>
                <Modal
                    visible={showModal}
                    transparent={true}
                    animationType="slide"
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.newAppointmentModal}>
                            <Text>Some Text</Text>
                            <ButtonTheme buttonText="Submit" onPressAction={closeModal} />
                        </View>
                    </View>
                </Modal>
            </View>
            <ButtonTheme buttonText="Schedule new appointment" onPressAction={openModal} />
            <View style={{ width: screenWidth * 0.9, borderWidth: 0.5, borderColor: "lightgray", alignSelf: "center" }}></View>
            <View>
                <Text style={{ fontWeight: "bold", fontStyle: "italic", color: "purple", marginBottom: 10 }}>Your upcoming appointments...</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.cardsContainer}
                >
                    <View style={styles.salonCard}></View>
                    <View style={styles.salonCard}></View>
                    <View style={styles.salonCard}></View>
                    <View style={styles.salonCard}></View>
                    <View style={styles.salonCard}></View>
                </ScrollView>
            </View>
            <View>
                <Text style={{ fontWeight: "bold", fontStyle: "italic", color: "purple", marginBottom: 10 }}>Your previous appointments...</Text>
                <View>
                    <Text>Appointment 1</Text>
                    <Text>Appointment 2</Text>
                    <Text>Appointment 3</Text>
                    <Text>Appointment 4</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    appointmentsContainer: {
        flex: 1,
        backgroundColor: "white",
        // borderWidth: 1,
        // borderColor: "red",
        rowGap: 20
    },
    cardsContainer: {
        // borderWidth: 1,
        // borderColor: "green"
        // marginTop: 10
    },
    salonCard: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        width: 150,
        height: 150,
        marginRight: 20
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
        // height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
    }
})