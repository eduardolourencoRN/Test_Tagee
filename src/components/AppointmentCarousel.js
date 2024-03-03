import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AppointmentCarousel = ({
    item,
    handleDayPress,
    appointmentsData,
    selectedDate,
    selectedColor,
    unselectedColor,
}) => {
    const hasAppointments = appointmentsData.some(
        (appointment) => appointment.date === item.fullDate,
    );

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => handleDayPress(item.fullDate)}>
                <View
                    style={[
                        styles.item,
                        selectedDate === item.fullDate
                            ? {
                                  ...selectedColor,
                                  shadowColor: '#000',
                                  shadowOffset: {
                                      width: 0,
                                      height: 2,
                                  },
                                  shadowOpacity: 0.25,
                                  shadowRadius: 3.84,
                                  elevation: 5,
                              }
                            : unselectedColor,
                    ]}
                >
                    <Text style={styles.dayOfWeek}>{item.dayOfWeek}</Text>
                    <Text style={styles.dayOfMonth}>{item.dayOfMonth}</Text>
                    {hasAppointments ? (
                        <View style={styles.dot} />
                    ) : (
                        <View style={{ width: 7, height: 7 }} />
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'lightblue',
        borderRadius: 30,
        height: 80,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 10,
    },
    dayOfWeek: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    dayOfMonth: {
        fontSize: 17,
    },
    dot: {
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: '#6A5ACD',
    },
    appointmentDot: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: 'green',
    },
});

export default AppointmentCarousel;
