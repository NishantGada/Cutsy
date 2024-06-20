import { View, Text, StyleSheet, SafeAreaView, Button, TextInput, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Home() {
    const navigation = useNavigation();
    const [activeCategory, setActiveCategory] = useState('');

    const categories = [
        "Alpha",
        "Beta",
        "Gamma",
        "Delta",
        "Ultra",
        "Silver",
        "Gold"
    ];

    const onPressCategory = (category) => {
        setActiveCategory(category);
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "white" }}>
            <SafeAreaView style={styles.HomeContainer}>
                <TextInput placeholder="Search..." style={styles.searchBar} />
                <ScrollView
                    horizontal
                    style={styles.tabs}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        categories.map((category, index) => {
                            return (
                                <TouchableOpacity onPress={() => onPressCategory(category)} key={index}>
                                    <Text style={[
                                        styles.category,
                                        activeCategory === category && styles.activeCategory
                                    ]}>
                                        {category}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
                <TouchableOpacity onPress={() => { alert("Offers Section") }}>
                    <View style={styles.offerBanner}>
                        {/* <Text>Offers Section</Text> */}
                        <Image source={require('../assets/offer.png')} style={{ width: screenWidth, height: screenWidth - 150 }} />
                    </View>
                </TouchableOpacity>
                <View style={{ rowGap: 20 }}>
                    <Text style={styles.heading}>---------------- Explore ----------------</Text>
                    <TouchableOpacity onPress={() => { alert("Men's category") }}>
                        <View style={styles.genderCategory}>
                            {/* <Text>Men</Text> */}
                            <Image source={require('../assets/mens.png')} style={{ width: screenWidth, height: screenWidth * 0.35 }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { alert("Women's category") }}>
                        <View style={styles.genderCategory}>
                            {/* <Text>Women</Text> */}
                            <Image source={require('../assets/womens.png')} style={{ width: screenWidth, height: screenWidth * 0.35 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ rowGap: 20 }}>
                    <Text style={styles.heading}>---------------- Previous Visited ----------------</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
                        <View style={styles.salonCard}></View>
                        <View style={styles.salonCard}></View>
                        <View style={styles.salonCard}></View>
                        <View style={styles.salonCard}></View>
                        <View style={styles.salonCard}></View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    HomeContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        rowGap: 20,
        marginBottom: 50
    },

    searchBar: {
        borderWidth: 1,
        borderColor: 'purple',
        borderRadius: 6,
        padding: 15
    },

    category: {
        borderWidth: 1,
        borderColor: 'purple',
        fontWeight: "bold",
        marginRight: 18,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        color: 'black'
    },

    activeCategory: {
        backgroundColor: 'purple',
        color: 'white',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'purple',
    },

    offerBanner: {
        borderWidth: 1,
        borderColor: 'lightgray',
        height: screenWidth - 150,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },

    heading: {
        textAlign: "center",
        fontStyle: "italic",
        color: "purple",
        fontWeight: "bold"
    },

    genderCategory: {
        borderWidth: 1,
        borderColor: 'lightgray',
        height: screenWidth * 0.35,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    cardsContainer: {
        // borderWidth: 1,
        // borderColor: "green"
    },

    salonCard: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        width: 150,
        height: 150,
        marginRight: 20
    }
});