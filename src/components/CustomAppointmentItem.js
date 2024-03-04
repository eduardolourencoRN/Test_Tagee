import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import calculateHeight from '../Utils/heightCalculator';
import { Dimensions } from 'react-native';
import CustomModal from './CustomModal';

const CustomAppointment = ({
    time,
    service = [],
    clientName,
    professionalName,
}) => {
    // Definindo um valor padrão para service
    const [modalVisible, setModalVisible] = useState(false);

    const handleAppointmentPress = () => {
        setModalVisible(true);
    };

    return (
        <View>
            <TouchableOpacity
                onPress={handleAppointmentPress}
                activeOpacity={0.6}
            >
                <View style={styles.appointmentContainer}>
                    <View style={styles.timeContainer}>
                        <Text>{time}</Text>
                        <View
                            style={[
                                styles.timeIndicator,
                                { height: calculateHeight(service.length) },
                            ]}
                        />
                    </View>
                    <View
                        style={[
                            styles.appointmentItem,
                            { height: calculateHeight(service.length) },
                        ]}
                    >
                        <View
                            style={[
                                styles.appointmentItemIndicator,
                                { height: calculateHeight(service.length) },
                            ]}
                        />

                        <View style={styles.ContainerDadosAppointment}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.detailLabel}>Cliente:</Text>
                                <Text style={styles.detailValue}>
                                    {clientName}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.detailLabel}>
                                    Profissional:
                                </Text>
                                <Text style={styles.detailValue}>
                                    {professionalName}
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <Text style={styles.detailLabel}>
                                    Serviços:
                                </Text>
                                <View style={styles.serviceContainer}>
                                    {service.map((item, index) => (
                                        <View key={index}>
                                            <Text
                                                style={
                                                    styles.ContainerTagService
                                                }
                                            >
                                                {item}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <CustomModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View>
    );
};
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
    appointmentContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
    },
    ContainerDadosAppointment: {
        flexDirection: 'column',
        paddingHorizontal: 10,
    },
    timeContainer: {
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    timeIndicator: {
        width: 3,
        backgroundColor: '#66CDAA',
        borderRadius: 2,
    },
    appointmentItem: {
        width: width / 1.4,
        height: 100,
        backgroundColor: '#ADD8E6',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    appointmentItemIndicator: {
        width: 5,
        backgroundColor: '#00BFFF',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },

    detailLabel: {
        fontSize: 15,
        fontWeight: '600',
    },
    detailValue: {
        fontSize: 15,
        fontWeight: '400',
        marginLeft: 5,
    },
    serviceContainer: {
        width: 400,
        maxWidth: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    ContainerTagService: {
        fontSize: 15,
        fontWeight: '400',
        color: '#fff',
        marginBottom: 5,
        backgroundColor: '#20B2AA',
        borderRadius: 5,
        width: 100,
        height: 40,
        maxWidth: '100%',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginLeft: 1,
    },
});
export default React.memo(CustomAppointment);
