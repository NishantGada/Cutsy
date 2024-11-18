import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const screenWidth = Dimensions.get('window').width;

export default function SalonCardList({ salonDetails }) {
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
        borderColor: "lightgray",
        borderRadius: 5,
        width: screenWidth - 20,
        // height: 150,
        marginVertical: 10
    }
});