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
                    <View style={styles.ViewContainerInput}>
                        <Text style={styles.title}>Nome de usuário</Text>
                        <TextInput
                            style={[
                                styles.input,
                                {
                                    borderColor:
                                        errorMessage && !userName && 'red',
                                },
                            ]}
                            placeholder='Usuário'
                            onChangeText={handleUserNameChange}
                            value={userName}
                            keyboardType='email-address'
                            autoCapitalize='none'
                            placeholderTextColor={
                                errorMessage && !userName ? 'red' : '#B5BDC7'
                            }
                        />
                    </View>

                    <View style={styles.ViewContainerInput}>
                        <Text style={styles.title}>Senha</Text>
                        <TextInput
                            style={[
                                styles.input,
                                {
                                    borderColor:
                                        errorMessage && !password && 'red',
                                },
                            ]}
                            placeholder='Digite pelo menos 6 caracteres'
                            onChangeText={handlePasswordChange}
                            value={password}
                            secureTextEntry
                            autoCapitalize='none'
                            placeholderTextColor={
                                errorMessage && !password ? 'red' : '#B5BDC7'
                            }
                        />
                        <View
                            style={{
                                width: '80%',
                                height: 20,
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                flexDirection: 'row',
                            }}
                        >
                            <TouchableOpacity
                                activeOpacity={0.6}
                                style={styles.ButtonForgotPassWord}
                            >
                                <Text style={styles.TitleForgotPassWord}>
                                    Esqueceu a senha?
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
                <View style={styles.errorMessageStyleView}>
                    {errorMessage && (
                        <Text
                            style={{
                                color: 'red',
                                fontSize: 12,
                                position: 'absolute',
                            }}
                        >
                            {errorMessage}
                        </Text>
                    )}
                </View>
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
