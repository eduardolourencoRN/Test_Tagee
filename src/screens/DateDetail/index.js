import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import appointmentsData from '../../services/appointmentsData';

const DateDetailScreen = ({ route }) => {
    const { fullDate } = route.params;

    // Formatando a data para o formato desejado (dia/mês/ano)
    const formattedDate = new Date(fullDate).toLocaleDateString('pt-BR');

    // Encontrar os agendamentos para a data selecionada
    const selectedAppointments = appointmentsData.filter(
        (appointment) => appointment.date === formattedDate,
    );

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{formattedDate}</Text>
            {selectedAppointments.length > 0 ? (
                selectedAppointments.map((appointment, index) => (
                    <View key={index} style={styles.appointmentContainer}>
                        <Text style={styles.time}>{appointment.time}</Text>
                        <Text style={styles.service}>
                            {appointment.service}
                        </Text>
                    </View>
                ))
            ) : (
                <Text style={styles.noAppointments}>
                    Nenhum agendamento para este dia
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    date: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    appointmentContainer: {
        marginBottom: 10,
    },
    time: {
        fontSize: 18,
    },
    service: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    noAppointments: {
        fontSize: 18,
        fontStyle: 'italic',
    },
});

export default DateDetailScreen;
