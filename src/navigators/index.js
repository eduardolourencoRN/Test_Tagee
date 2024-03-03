import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import LoginScreen from '../screens/Login';
import Schedulings from '../screens/Schedulings';
import DateDetailScreen from '../screens/DateDetail';

const Stack = createNativeStackNavigator();

function App() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={
                    isAuthenticated ? 'Schedulings' : 'LoginScreen'
                }
            >
                {console.log(isAuthenticated)}
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Schedulings'
                    component={Schedulings}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='DateDetailScreen'
                    component={DateDetailScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);
