import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

const Schedulings = ({ text }) => {
    const { reset } = useNavigation();
    const { isAuthenticated, logout } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await logout();
            reset({
                index: 0,
                routes: [{ name: 'LoginScreen' }],
            });
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {isAuthenticated && (
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 40,
                        backgroundColor: '#1E9FF2',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}
                    onPress={handleLogout}
                >
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
            )}
            {isLoading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size='large' color='#1E9FF2' />
                    <Text style={styles.loadingText}>Saindo...</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    loadingText: {
        marginTop: 10,
        color: '#fff',
        fontSize: 19,
    },
});

export default Schedulings;
