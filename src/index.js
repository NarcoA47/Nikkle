import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext, AuthProvider } from './apis/MethodContext';

const Stack = createNativeStackNavigator();
const stack = createBottomTabNavigator()


import { Authenticated } from './Navigation/Authenticated';
import { UnAuthenticated } from './Navigation/UnAuthenticated';

function Container () {

    return (
        <AuthProvider>
            <AppNavManager />
        </AuthProvider>
    );
};

export default Container

export const AppNavManager = () => {

    const  {token}  = useContext(AuthContext);

    return (
        <NavigationContainer style={styles.container}>
             <UnAuthenticated/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
