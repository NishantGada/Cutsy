import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SalonCard({ salonDetails }) {
    return (
        <View style={styles.salonCard}>
            <Text>{salonDetails.salonName}</Text>
            <Text>{salonDetails.salonCity}</Text>
            <Text>{salonDetails.salonStarRating}</Text>
            <Text>{salonDetails.dateVisited}</Text>
            <Text>{salonDetails.amountPaid}</Text>
            <Text>{salonDetails.attendedBy}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    salonCard: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        width: 150,
        height: 150,
        marginRight: 20
    }
});