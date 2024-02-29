import React, { useEffect } from 'react';
import LoginScreen from './src/screens/Login';
import * as SplashScreen from 'expo-splash-screen';

// Impede que a splash screen seja ocultada automaticamente
SplashScreen.preventAutoHideAsync();

export default function App() {
    useEffect(() => {
        // Oculta a splash screen após 3 segundos
        setTimeout(async () => {
            await SplashScreen.hideAsync();
        }, 3000); // 3000 milissegundos = 3 segundos
    }, []);

    return <LoginScreen />;
}
