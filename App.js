import React, { useEffect } from 'react';
import LoginScreen from './src/screens/Login';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
    useEffect(() => {
        setTimeout(async () => {
            await SplashScreen.hideAsync();
        }, 3000);
    }, []);

    return <LoginScreen />;
}
