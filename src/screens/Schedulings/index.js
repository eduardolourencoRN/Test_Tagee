import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import appointmentsData from '../../services/appointmentsData';
import AppointmentCarousel from '../../components/AppointmentCarousel';
import CustomHeader from '../../components/CustomHeader';
import CustomAppointment from '../../components/CustomAppointmentItem';
import { AntDesign } from '@expo/vector-icons';
import monthNamesUtils from '../../Utils/monthNames';
import weekDays from '../../Utils/weekdays';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';

const MyCarousel = () => {
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [startIndex, setStartIndex] = useState(0);

    const getNextDays = async (startIndex, count) => {
        const days = [];
        const weekdays = weekDays;
        const today = new Date();
        let nextDate = new Date(today);
        nextDate.setDate(today.getDate() + startIndex);
        {
            console.log(today.getDate());
        }
        for (let i = 0; i < count; i++) {
            const monthNames = monthNamesUtils;
            const formattedDate = {
                dayOfWeek: weekdays[nextDate.getDay()],
                dayOfMonth: nextDate.getDate(),
                month: monthNames[nextDate.getMonth()],
                fullDate: formatDate(nextDate),
            };
            days.push(formattedDate);
            nextDate.setDate(nextDate.getDate() + 1);
        }
        return days;
    };

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const loadNextDays = () => {
        setStartIndex(startIndex + 5);
    };

    const loadPreviousDays = () => {
        if (startIndex >= 5) {
            setStartIndex(startIndex - 5);
        }
    };

    const handleDayPress = (fullDate) => {
        setSelectedDate(fullDate);
    };

    const renderAppointments = () => {
        if (!selectedDate) return null;
        const appointments = appointmentsData.filter(
            (appointment) => appointment.date === selectedDate,
        );
        if (appointments.length === 0) {
            return (
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 16, color: 'red' }}>
                        Não há agendamentos para esta data.
                    </Text>
                </View>
            );
        }

        return appointments.map((appointment, index) => (
            <CustomAppointment
                key={index}
                time={appointment.time}
                service={appointment.service}
                clientName={appointment.clientName}
                professionalName={appointment.professionalName}
            />
        ));
    };

    useEffect(() => {
        const fetchData = async () => {
            const today = new Date();
            const formattedDate = formatDate(today);
            setSelectedDate(formattedDate);
            const nextDays = await getNextDays(startIndex, 5);
            setDates(nextDays);
        };

        fetchData();
    }, [startIndex]);

    const currentDate = new Date();
    const options = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    };
    const currentDateFormatted = currentDate.toLocaleDateString(
        'pt-BR',
        options,
    );

    return (
        <View style={styles.container}>
            <CustomHeader title={'AGENDAMENTOS'} />
            <Text style={{ fontSize: 14, color: '#808080', marginLeft: 10 }}>
                Hoje
            </Text>
            <View
                style={{
                    width: '90%',
                    height: 30,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: 10,
                }}
            >
                <Text style={styles.date}>{currentDateFormatted}</Text>
                <TouchableOpacity>
                    <Ionicons
                        name='notifications-outline'
                        size={25}
                        color='black'
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.containerFlatList}>
                <View style={{ width: 40, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={loadPreviousDays}
                        style={{ width: 30, height: 30 }}
                    >
                        <AntDesign name='left' size={24} color='black' />
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={dates}
                    renderItem={({ item }) => (
                        <AppointmentCarousel
                            item={item}
                            selectedDate={selectedDate}
                            handleDayPress={handleDayPress}
                            appointmentsData={appointmentsData}
                            selectedColor={{ backgroundColor: '#00BFFF' }}
                            unselectedColor={{ backgroundColor: '#87CEFA' }}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    contentContainerStyle={styles.flatlistContainer}
                    ListEmptyComponent={<Text>No items</Text>}
                    initialNumToRender={5}
                    showsHorizontalScrollIndicator={false}
                />

                <View style={{ width: 40, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={loadNextDays}
                        style={{ width: 30, height: 20 }}
                    >
                        <AntDesign name='right' size={24} color='black' />
                    </TouchableOpacity>
                </View>
            </View>
            {selectedDate && (
                <ScrollView
                    style={styles.appointmentsContainer}
                    showsVerticalScrollIndicator={false}
                >
                    {renderAppointments()}
                </ScrollView>
            )}
            <View style={{ height: 120 }} />
        </View>
    );
};

export default MyCarousel;
