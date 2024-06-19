import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const Appbar = () => {
    return (
        <SafeAreaView style={styles.appbar}>
            <Text style={styles.appbarHeader}>Cutsy</Text>
        </SafeAreaView>
    )
}

export default Appbar

const styles = StyleSheet.create({
    appbar: {
        // alignItems: 'center',
        marginBottom: 20
    },
    appbarHeader: {
        fontSize: 28,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: "purple"
    }
})