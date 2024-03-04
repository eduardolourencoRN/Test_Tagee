import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomHeader = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const handleMessages = () => {};

const styles = {
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#1E9FF2',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
};

export default CustomHeader;
