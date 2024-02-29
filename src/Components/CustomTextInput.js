import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({
    title,
    placeholder,
    value,
    onChangeText,
    keyboardType,
    secureTextEntry,
    placeholderTextColor,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={placeholderTextColor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});

export default CustomTextInput;
