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
import Axios from 'axios';
import authenticate from '../../services/auth';
const LoginScreen = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
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
    const device = Constants.deviceName;
    console.log(device);

    const handleLogin = async () => {
        try {
            await authenticate(userName, password, device);
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao fazer login');
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
