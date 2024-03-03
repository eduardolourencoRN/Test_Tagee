import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class AppointmentCarousel extends PureComponent {
    render() {
        const { item, handleDayPress, appointmentsData } = this.props;

        const hasAppointments = appointmentsData.some(
            (appointment) => appointment.date === item.fullDate,
        );

        return (
            <TouchableOpacity onPress={() => handleDayPress(item.fullDate)}>
                <View style={styles.item}>
                    <Text style={styles.dayOfWeek}>{item.dayOfWeek}</Text>
                    <Text style={styles.dayOfMonth}>{item.dayOfMonth}</Text>
                    {hasAppointments && <View style={styles.month} />}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'lightblue',
        borderRadius: 30,
        height: 100,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 10,
    },
    dayOfWeek: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    dayOfMonth: {
        fontSize: 17,
    },
    month: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
        marginTop: 10,
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
