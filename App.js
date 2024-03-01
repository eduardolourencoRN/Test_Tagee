import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login';
import Schedulings from './src/screens/Schedulings';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name='Home'
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name='Schedulings' component={Schedulings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
