import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { styles } from '../screens/Schedulings/style';
import { FlatList } from 'react-native';
import calculateHeight from '../services/heightCalculator';

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

    {
        console.log('qty', service.length);
    }

    return (
        <Animated.View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
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
                        height: calculateHeight(service.length),
                        backgroundColor: '#66CDAA',
                        borderRadius: 2,
                    }}
                />
            </View>
            <View
                style={[
                    styles.appointmentItem,
                    { height: calculateHeight(service.length) },
                ]}
            >
                <View
                    style={{
                        width: 5,
                        height: calculateHeight(service.length),
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
                            Cliente:
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
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ fontSize: 15, fontWeight: '600' }}>
                            Serviços:
                        </Text>
                        <View
                            style={{
                                width: 400,
                                maxWidth: '100%',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                            }}
                        >
                            {service.map((item, index) => (
                                <View key={index}>
                                    <Text
                                        style={{
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
                                        }}
                                    >
                                        {item}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </Animated.View>
    );
};

export default React.memo(CustomAppointment);
