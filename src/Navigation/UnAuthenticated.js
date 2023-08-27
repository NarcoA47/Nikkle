import React, {useContext} from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

import LoginScreen from "../Screens/LoginScreen"
import RegisterScreen from "../Screens/RegisterScreen";
import PlansScreen from "../Screens/PlansScreen";
import Base from "../Screens/Base";

const Stack = createNativeStackNavigator();

export const UnAuthenticated = () => {
    return (
        <PaperProvider>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Base" component={Base}/>
        </Stack.Navigator>
    </PaperProvider>
        
    )
}