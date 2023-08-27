import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { MenuProvider } from 'react-native-popup-menu';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

//Screens
import BankTransfer from "../Screens/BankTransfers";
import BankAccount from "../Screens/BankAccount";
import HomeScreen from "../Screens/AccountScreen";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()


export const Authenticated = () => {
    return (
    <PaperProvider style={styles.container}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeNavigation" component={HomeNavigation}/>
        </Stack.Navigator>
    </PaperProvider>
        
    )
}
function HomeNavigation () {
    return (
        <Tab.Navigator  screenOptions={{tabBarStyle: {backgroundColor: '#008ecc'}, headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen}  options={{tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name='home' color='#ffffff' size={size}/>
            )}}/>
        <Tab.Screen name="BankAccount" component={BankAccount}  options={{tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="bank" size={size} color='#ffffff' />
            )}}/>
        <Tab.Screen name="BankTransfer" component={BankTransfer}  options={{tabBarIcon: ({color, size}) => (
               <MaterialCommunityIcons name="bank-transfer" size={size} color='#ffffff' />
            )}}/>
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
    },
});