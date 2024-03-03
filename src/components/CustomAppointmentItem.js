import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../screens/Schedulings/style';

const CustomAppointment = ({ time, service, index, clientName }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: 100,
                marginTop: 10,
            }}
        >
            <View
                style={{
                    alignItems: 'center',
                    paddingHorizontal: 10,
                }}
            >
                <Text>{time}</Text>
                <View
                    style={{
                        width: 3,
                        height: 80,
                        backgroundColor: '#66CDAA',
                        borderRadius: 2,
                    }}
                />
            </View>
            <View key={index} style={styles.appointmentItem}>
                <View
                    style={{
                        width: 5,
                        height: 100,
                        backgroundColor: '#00BFFF',
                        borderTopLeftRadius: 30,
                        borderBottomLeftRadius: 30,
                    }}
                />
                <View
                    style={{ flexDirection: 'column', paddingHorizontal: 10 }}
                >
                    <Text style={{ fontSize: 15, fontWeight: '400' }}>
                        {clientName}
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: '600' }}>
                        {service}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default CustomAppointment;
