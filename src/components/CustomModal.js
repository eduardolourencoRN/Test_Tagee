import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

const CustomModal = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        backgroundColor: 'white',
                        padding: 20,
                        borderRadius: 10,
                        elevation: 5,
                    }}
                >
                    <Text>Modal Content</Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={{ color: 'blue' }}>Close Modal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default CustomModal;
