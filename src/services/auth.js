import Axios from 'axios';
import { Alert } from 'react-native';

const authenticate = async (username, password, device) => {
    try {
        const url = 'https://homolog.gendero.com.br/api/login';
        const response = await Axios.post(url, {
            username: username,
            password: password,
            device_name: device,
        });

        console.log(response.data);

        if (response.status === 200) {
            Alert.alert('Login bem-sucedido!');
            return response.data;
        } else {
            console.error('Erro ao fazer login:', response.data.errors);
            console.log('ffffff', response.data.messages);
            throw new Error('Erro ao fazer login');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
};

export default authenticate;
