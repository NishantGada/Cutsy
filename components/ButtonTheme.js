import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const screenWidth = Dimensions.get('window').width;

export default function ButtonTheme({ onPressAction, buttonText }) {
    return (
        <TouchableOpacity onPress={onPressAction}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: "purple",
        backgroundColor: "purple",
        borderRadius: 5,
        alignItems: "center",
        padding: 15,
        // width: screenWidth * 0.9
        width: screenWidth - 20
    },
    buttonText: {
        fontWeight: "bold",
        color: "white"
    },
})