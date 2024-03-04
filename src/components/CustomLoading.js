import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

const CustomLoading = ({ isLoading }) => {
    return (
        isLoading && (
            <View style={styles.loadingStyle}>
                <ActivityIndicator size='large' color='#1E9FF2' />
                <Text style={styles.loadingText}>Entrando...</Text>
            </View>
        )
    );
};

const styles = StyleSheet.create({
    loadingStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
    },
    loadingText: {
        marginTop: 10,
        color: '#fff',
        fontSize: 19,
    },
});

export default CustomLoading;
