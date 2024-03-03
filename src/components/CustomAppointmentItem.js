import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { styles } from '../screens/Schedulings/style';

const CustomAppointment = ({ time, service, clientName, professionalName }) => {
    const fadeInDown = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeInDown, {
            toValue: 1,
            duration: 500,
            delay: 0,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: 100,
                marginTop: 10,
                opacity: fadeInDown,
                transform: [
                    {
                        translateY: fadeInDown.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-50, 0],
                        }),
                    },
                ],
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
            <View style={styles.appointmentItem}>
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
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, fontWeight: '600' }}>
                            Cliente:{' '}
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: '400' }}>
                            {clientName}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, fontWeight: '600' }}>
                            Profissional:
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: '400' }}>
                            {professionalName}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, fontWeight: '600' }}>
                            Serviços:
                        </Text>
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            {service.map((serviceName, index) => (
                                <Text
                                    key={index}
                                    style={{
                                        fontSize: 15,
                                        fontWeight: '400',
                                        color: '#fff',
                                        marginLeft: 5,
                                        backgroundColor: '#20B2AA',
                                        borderRadius: 5,
                                        padding: 2,
                                    }}
                                >
                                    {serviceName}
                                </Text>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </Animated.View>
    );
};

export default React.memo(CustomAppointment);
