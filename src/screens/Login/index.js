import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Keyboard,
    ActivityIndicator,
} from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';
import authenticate from '../../services/auth';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../contexts/AuthContext';
import CustomInput from '../../components/CustomInput';

const LoginScreen = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const device = Constants.deviceName;
    const [isLoading, setIsLoading] = useState(false);

    const { reset } = useNavigation();
    const { isAuthenticated } = useAuth();

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            const token = await authenticate(userName, password, device);
            await AsyncStorage.setItem('userToken', token.token);
            setErrorMessage(null);
            reset({
                index: 0,
                routes: [{ name: 'Schedulings' }],
            });
        } catch (error) {
            setIsLoading(false);
            if (error.response) {
                const responseData = error.response.data;
                console.error('Erro ao fazer login:', responseData);
                if (
                    responseData &&
                    responseData.errors &&
                    responseData.errors.username
                ) {
                    setErrorMessage(responseData.errors.username[0]);
                } else if (responseData && responseData.message) {
                    setErrorMessage(responseData.message);
                } else {
                    setErrorMessage('Credenciais inválidas');
                }
            } else {
                console.error('Erro ao fazer login:', error);
                setErrorMessage('Credenciais inválidas');
            }
        } finally {
            Keyboard.dismiss();
        }
    };

    const handleUserNameChange = (text) => {
        setErrorMessage(null);
        setUserName(text);
    };

    const handlePasswordChange = (text) => {
        setErrorMessage(null);
        setPassword(text);
    };

    useEffect(() => {
        if (isAuthenticated) {
            reset({
                index: 0,
                routes: [{ name: 'Schedulings' }],
            });
        }
    }, [isAuthenticated, reset]);

    return (
        <SafeAreaView style={styles.containerSafeAreaView}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.ButtonBack} activeOpacity={0.6}>
                    <Icon
                        name='chevron-back-outline'
                        size={25}
                        color={'#1E9FF2'}
                    />
                </TouchableOpacity>
                <View style={styles.ViewImage}>
                    <Image
                        source={require('../../Images/logotipo.png')}
                        resizeMode='contain'
                        style={styles.image}
                    />
                </View>
                <View style={styles.ViewInputs}>
                    <CustomInput
                        label='Nome de usuário'
                        value={userName}
                        onChangeText={handleUserNameChange}
                        placeholder='Usuário'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        errorMessage={
                            errorMessage && !userName
                                ? 'Digite um nome de usuário válido'
                                : null
                        }
                    />

                    <CustomInput
                        label='Senha'
                        value={password}
                        onChangeText={handlePasswordChange}
                        placeholder='Digite pelo menos 6 caracteres'
                        secureTextEntry
                        autoCapitalize='none'
                        errorMessage={
                            errorMessage && !password
                                ? 'A senha deve ter pelo menos 6 caracteres'
                                : null
                        }
                        showForgotPasswordButton={true}
                        onPressForgotPassword={() => {}}
                    />
                </View>

                <TouchableOpacity
                    style={styles.Button}
                    activeOpacity={0.6}
                    onPress={handleLogin}
                >
                    <Icon
                        name='lock-open-outline'
                        size={15}
                        color={'#1E9FF2'}
                    />
                    <Text style={styles.TitleButtonEnter}>Entrar</Text>
                </TouchableOpacity>

                {isLoading && (
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <ActivityIndicator size='large' color='#1E9FF2' />
                        <Text
                            style={{
                                marginTop: 10,
                                color: '#fff',
                                fontSize: 19,
                            }}
                        >
                            Entrando...
                        </Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
