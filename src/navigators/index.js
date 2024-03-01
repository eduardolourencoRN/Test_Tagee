import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import Schedulings from '../screens/Schedulings';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Schedulings'>
                <Stack.Screen name='Home' component={LoginScreen} />
                <Stack.Screen name='Schedulings' component={Schedulings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
