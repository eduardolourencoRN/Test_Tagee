import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Alert,
} from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';
import authenticate from '../../services/auth';

const LoginScreen = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const device = Constants.deviceName;
    const {
        containerSafeAreaView,
        container,
        ButtonBack,
        ViewImage,
        image,
        ViewInputs,
        ViewContainerInput,
        input,
        title,
        ButtonForgotPassWords,
        Button,
        TitleButtonEnter,
        TitleForgotPassWord,
    } = styles;

    const handleLogin = async () => {
        try {
            await authenticate(userName, password, device);
            setErrorMessage(null);
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setErrorMessage('Credenciais inválidasx');
        }
    };

    return (
        <SafeAreaView style={containerSafeAreaView}>
            <View style={container}>
                <TouchableOpacity style={ButtonBack} activeOpacity={0.6}>
                    <Icon
                        name='chevron-back-outline'
                        size={25}
                        color={'#1E9FF2'}
                    />
                </TouchableOpacity>
                <View style={ViewImage}>
                    <Image
                        source={require('../../Images/logotipo.png')}
                        resizeMode='contain'
                        style={image}
                    />
                </View>
                <View style={ViewInputs}>
                    <View style={ViewContainerInput}>
                        <Text style={title}>E-mail</Text>
                        <TextInput
                            style={input}
                            placeholder='username'
                            onChangeText={setUserName}
                            value={userName}
                            keyboardType='email-address'
                            placeholderTextColor='#B5BDC7'
                        />
                    </View>

                    <View style={ViewContainerInput}>
                        <Text style={title}>Senha</Text>
                        <TextInput
                            style={input}
                            placeholder='Digite pelo menos 6 caracteres'
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry
                            placeholderTextColor='#B5BDC7'
                        />
                        {errorMessage && (
                            <Text style={{ color: 'red', fontSize: 12 }}>
                                {errorMessage}
                            </Text>
                        )}
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={ButtonForgotPassWords}
                        >
                            <Text style={TitleForgotPassWord}>
                                Esqueceu a senha?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    style={Button}
                    activeOpacity={0.6}
                    onPress={handleLogin}
                >
                    <Icon
                        name='lock-open-outline'
                        size={15}
                        color={'#1E9FF2'}
                    />
                    <Text style={TitleButtonEnter}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
