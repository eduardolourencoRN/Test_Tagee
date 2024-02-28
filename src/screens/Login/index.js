import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Aqui você pode adicionar a lógica de autenticação
        console.log('Email:', email);
        console.log('Senha:', password);
        // Por exemplo, você pode fazer uma chamada de API para autenticar o usuário
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={setEmail}
                value={email}
                keyboardType='email-address'
            />
            <TextInput
                style={styles.input}
                placeholder='Senha'
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <Button title='Entrar' onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default LoginScreen;
