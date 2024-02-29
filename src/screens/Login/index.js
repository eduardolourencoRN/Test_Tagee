import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userCredentials, setUserCredentials] = useState([]);

    const handleLogin = () => {
        if (email.trim() !== '' && password.trim() !== '') {
            const newUser = { email: email, password: password };
            setUserCredentials([...userCredentials, newUser]);
            setEmail('');
            setPassword('');
        }
    };
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
                        <Text style={styles.title}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='exemplo@123.com'
                            onChangeText={setEmail}
                            value={email}
                            keyboardType='email-address'
                            placeholderTextColor='#B5BDC7'
                        />
                    </View>

                    <View style={styles.ViewContainerInput}>
                        <Text style={styles.title}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Digite pelo menos 6 caracteres'
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry
                            placeholderTextColor='#B5BDC7'
                        />
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={styles.ButtonForgotPassWords}
                        >
                            <Text style={styles.TitleForgotPassWord}>
                                Esqueceu a senha?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.Button} activeOpacity={0.6}>
                    <Icon
                        name='lock-open-outline'
                        size={15}
                        color={'#1E9FF2'}
                    />
                    <Text style={styles.TitleButtonEnter} onPress={handleLogin}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
