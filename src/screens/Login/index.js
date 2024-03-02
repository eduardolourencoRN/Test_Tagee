import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
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
import CustomLoading from '../../components/CustomLoading';

const LoginScreen = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [credencias, setCredencias] = useState(null);
    const device = Constants.deviceName;
    const [isLoading, setIsLoading] = useState(false);

    const { reset } = useNavigation();
    const { isAuthenticated } = useAuth();

    const handleLogin = async () => {
        Keyboard.dismiss();
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
                    console.log(responseData.errors);
                    setErrorMessage(responseData.errors.username[0]);
                } else if (responseData && responseData.message) {
                    setErrorMessage(responseData.message);
                } else {
                    setErrorMessage('Credenciais inválidas');
                }
            } else {
                console.error('Erro ao fazer login:', error);
                setCredencias('Credenciais inválidas');
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
                            !userName && errorMessage
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
                            !password && errorMessage
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

                <CustomLoading isLoading={isLoading} />

                {errorMessage ===
                    'As credenciais fornecidas estão incorretas.' && (
                    <Text style={styles.error}>{errorMessage}</Text>
                )}
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
