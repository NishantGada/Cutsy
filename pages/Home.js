import { View, Text, StyleSheet, SafeAreaView, Button, TextInput, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Home() {
    const navigation = useNavigation();

    const onPressViewProfile = () => {
        navigation.navigate('Profile');
    }

    return (
        <SafeAreaView style={styles.HomeContainer}>
            {/* <Text style={styles.welcomeText}>Hi Nishant, Welcome to Cutsy!</Text> */}
            <TextInput placeholder="Search..." style={styles.searchBar} />
            {/* <Button onPress={onPressViewProfile} title='View Profile' /> */}
            <View style={styles.offerBanner}></View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    HomeContainer: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        rowGap: 20
    },
    welcomeText: {
        fontSize: 18,
    },
    searchBar: {
        borderWidth: 1,
        borderColor: 'lightgray',
        // marginVertical: 20,
        padding: 15,
    },
    offerBanner: {
        borderWidth: 1,
        borderColor: 'lightgray',
        backgroundColor: 'lightgray',
        height: screenWidth - 20,
    },
})