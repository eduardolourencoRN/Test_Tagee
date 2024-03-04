import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import LoginScreen from '../screens/Login';
import Schedulings from '../screens/Schedulings';
import DateDetailScreen from '../screens/DateDetail';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated);

    return (
        <NavigationContainer>
            <StatusBar backgroundColor={'#1E9FF2'} />
            <Stack.Navigator>
                {isAuthenticated ? (
                    <>
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
                    </>
                ) : (
                    <Stack.Screen
                        name='LoginScreen'
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const AppWrapper = () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);

export default AppWrapper;
