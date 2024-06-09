import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/Home';
import ProfileScreen from './pages/Profile';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet, View } from 'react-native';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Appbar from './components/Appbar';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/*

USE STACK NAVIGATION WHEN USING HEIRARCHICAL STRUCTURE. SUCH AS NAVIGATING WITHIN DIFFERENT SECTIONS.

function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
}

function ProfileStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Profile" component={ProfileScreen} />
		</Stack.Navigator>
	);
}
*/

function App() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<Appbar />
			<NavigationContainer>
				<StatusBar style="auto" />
				<Tab.Navigator>
					<Tab.Screen
						options={{
							headerShown: false
						}}
						name="Home"
						component={HomeScreen} />
					<Tab.Screen
						options={{
							headerShown: false
						}}
						name="Appointments"
						component={Appointments} />
					<Tab.Screen
						options={{
							headerShown: false
						}}
						name="Profile"
						component={ProfileScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
}

export default App;

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		// borderWidth: 3,
        // borderColor: 'brown',
		padding: 10
	},
})