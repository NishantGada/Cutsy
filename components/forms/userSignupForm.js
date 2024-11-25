import * as React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button, Dimensions, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import CustomButton from '../CustomButton';

const screenWidth = Dimensions.get('window').width;

export default function UserSignupForm({ handleOnSignup, handleExistingUser }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View>
                <Text>First Name:</Text>
                <TextInput
                    style={styles.input}
                    value={firstName}
                    onChangeText={setFirstName}
                />
            </View>
            <View>
                <Text>Last Name:</Text>
                <TextInput
                    style={styles.input}
                    value={lastName}
                    onChangeText={setLastName}
                />
            </View>
            <View>
                <Text>Username:</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <View>
                <Text>Password:</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <View>
                <Text>Date of Birth:</Text>
                <TextInput
                    style={styles.input}
                    value={dob}
                    onChangeText={setDob}
                />
            </View>
            {/* <View>
                <Text>Gender:</Text>
                <Picker
                    selectedValue={gender}
                    onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Other" value="Other" />
                </Picker>
            </View> */}
            <View>
                <Text>Gender:</Text>
                <TextInput
                    style={styles.input}
                    value={gender}
                    onChangeText={setGender}
                />
            </View>
            <View>
                <Text>Age:</Text>
                <TextInput
                    style={styles.input}
                    value={age}
                    onChangeText={setAge}
                    keyboardType="numeric"
                />
            </View>
            <View>
                <Text>Email:</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
            </View>
            <View>
                <Text>Phone:</Text>
                <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
            </View>
            <View>
                <Text>Address Line 1:</Text>
                <TextInput
                    style={styles.input}
                    value={addressLine1}
                    onChangeText={setAddressLine1}
                />
            </View>
            <View>
                <Text>Address Line 2:</Text>
                <TextInput
                    style={styles.input}
                    value={addressLine2}
                    onChangeText={setAddressLine2}
                />
            </View>
            <View>
                <Text>City:</Text>
                <TextInput
                    style={styles.input}
                    value={city}
                    onChangeText={setCity}
                />
            </View>
            <View>
                <Text>State:</Text>
                <TextInput
                    style={styles.input}
                    value={state}
                    onChangeText={setState}
                />
            </View>
            <View>
                <Text>Pincode:</Text>
                <TextInput
                    style={styles.input}
                    value={pincode}
                    onChangeText={setPincode}
                    keyboardType="numeric"
                />
            </View>
            <View>
                <Text>Country:</Text>
                <TextInput
                    style={styles.input}
                    value={country}
                    onChangeText={setCountry}
                />
            </View>
            <View style={styles.signupButtonContainer}>
                {/* <TouchableOpacity style={styles.signupButton} onPress={() => handleOnSignup}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
                </TouchableOpacity> */}
                <CustomButton buttonText="Sign up" onPressAction={handleOnSignup} />
                <TouchableOpacity onPress={handleExistingUser}>
                    <Text style={{ color: "gray", fontStyle: "italic", fontSize: 16 }}>Existing user?</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 20,
        // paddingBottom: 150
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 8,
    },
    picker: {
        height: 50,
        marginBottom: 20,
    },
    signupButtonContainer: {
        flexDirection: "column",
        alignItems: "center",
        rowGap: 20,
        marginVertical: 10,
    },
});
