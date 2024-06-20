import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/Home';
import ProfileScreen from './pages/Profile';
import Appointments from './pages/Appointments';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';
import Appbar from './components/Appbar';
import Signup from './pages/Signup';
import Login from './pages/Login';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				options={{
					headerShown: false
				}}
				name="Home"
				component={HomeScreen}
			/>
			<Tab.Screen
				options={{
					headerShown: false
				}}
				name="Appointments"
				component={Appointments}
			/>
			<Tab.Screen
				options={{
					headerShown: false
				}}
				name="Profile"
				component={ProfileScreen}
			/>
		</Tab.Navigator>
	);
}

function App() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<Appbar />
			<NavigationContainer>
				<StatusBar style="auto" />
				<Stack.Navigator>
					<Stack.Screen
						name="Login"
						component={Login}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Signup"
						component={Signup}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Main"
						component={TabNavigator}
						options={{ headerShown: false, gestureEnabled: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
}

export default App;

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		padding: 10
	},
});
