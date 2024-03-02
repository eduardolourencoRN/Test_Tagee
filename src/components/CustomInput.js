import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const CustomInput = ({
    label,
    value,
    onChangeText,
    placeholder,
    keyboardType,
    autoCapitalize,
    errorMessage,
    showForgotPasswordButton,
    onPressForgotPassword,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
            <TextInput
                style={[
                    styles.input,
                    { borderColor: errorMessage && !value && 'red' },
                ]}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                placeholderTextColor='#B5BDC7'
            />
            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

            {showForgotPasswordButton && (
                <View style={styles.containerforgotPassword}>
                    <TouchableOpacity
                        style={styles.forgotPasswordButton}
                        onPress={onPressForgotPassword}
                    >
                        <Text style={styles.forgotPasswordText}>
                            Esqueceu a senha?
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        alignItems: 'center',
        marginBottom: 7,
    },
    title: {
        fontSize: 12,
        position: 'absolute',
        left: 45,
        bottom: 80,
        fontWeight: '600',
        color: '#141042',
    },
    input: {
        width: '80%',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#141042',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 5,
    },
    error: {
        color: 'red',
        fontSize: 12,
        position: 'absolute',
        left: 44,
        bottom: 12,
    },
    forgotPasswordButton: {
        alignSelf: 'flex-end',
        marginTop: 5,
    },
    forgotPasswordText: {
        fontSize: 12,
        color: '#1E9FF2',
    },
    containerforgotPassword: {
        width: '80%',
        height: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
});

export default CustomInput;
