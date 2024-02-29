import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './style';

const Schedulings = () => {
    const [scheduleDate, setScheduleDate] = useState('');
    const [scheduleTime, setScheduleTime] = useState('');

    const handleSchedule = () => {
        if (!scheduleDate || !scheduleTime) {
            Alert.alert(
                'Erro',
                'Por favor, preencha a data e a hora do agendamento.',
            );
            return;
        }

        // Aqui você pode implementar a lógica para agendar o compromisso
        // Por exemplo, enviar os dados para um servidor, salvar no banco de dados local, etc.

        // Exemplo de log
        console.log('Agendamento realizado:');
        console.log('Data:', scheduleDate);
        console.log('Hora:', scheduleTime);

        // Exemplo de feedback para o usuário
        Alert.alert('Sucesso', 'Agendamento realizado com sucesso!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agendar Compromisso</Text>
            <TextInput
                style={styles.input}
                placeholder='Data (DD/MM/AAAA)'
                value={scheduleDate}
                onChangeText={(text) => setScheduleDate(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Hora (HH:MM)'
                value={scheduleTime}
                onChangeText={(text) => setScheduleTime(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSchedule}>
                <Text style={styles.buttonText}>Agendar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Schedulings;
