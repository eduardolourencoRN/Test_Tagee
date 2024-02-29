import React, { useState } from 'react';
import CustomSplashScreen from './src/screens/splashScreen/index';
import LoginScreen from './src/screens/Login';
import { preventAutoHideAsync } from 'expo-splash-screen';

export default function App() {
    return <LoginScreen />;
}
