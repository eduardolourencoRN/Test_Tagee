import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import LoginScreen from '../screens/Login';
import Schedulings from '../screens/Schedulings';

const Stack = createNativeStackNavigator();

function App() {
    const { isAuthenticated } = useAuth();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={
                    isAuthenticated ? 'Schedulings' : 'LoginScreen'
                }
            >
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name='Schedulings' component={Schedulings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);
