import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';
import appointmentsData from '../../services/appointmentsData';
import AppointmentCarousel from '../../components/AppointmentCarousel';
import { styles } from './style';
import { AntDesign } from '@expo/vector-icons';
import monthNamesUtils from '../../Utils/monthNames';
import weekDays from '../../Utils/weekdays';
import CustomHeader from '../../components/CustomHeader';
import CustomAppointment from '../../components/CustomAppointmentItem';

const MyCarousel = () => {
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [startIndex, setStartIndex] = useState(0);
    const { widthX } = Dimensions.get('screen').width;
    const { heightY } = Dimensions.get('screen').height;

    const getNextDays = async (startIndex, count) => {
        const days = [];
        const weekdays = weekDays;
        const today = new Date();
        let nextDate = new Date(today);
        nextDate.setDate(today.getDate() + startIndex);

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
        return appointments.map((appointment, index) => (
            <CustomAppointment
                key={index}
                time={appointment.time}
                service={appointment.service}
                clientName={appointment.clientName}
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
        <ScrollView style={{ width: widthX, height: heightY }}>
            <View style={styles.container}>
                <CustomHeader title={'Agendamentos'} />
                <View
                    style={{
                        width: '100%',
                        height: 50,
                        justifyContent: 'center',
                        marginHorizontal: 10,
                    }}
                >
                    <Text style={{ fontSize: 14, color: '#808080' }}>Hoje</Text>
                    <Text style={styles.date}>{currentDateFormatted}</Text>
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
                        horizontal={true}
                        contentContainerStyle={styles.flatlistContainer}
                        ListEmptyComponent={<Text>No items</Text>}
                        initialNumToRender={5}
                        showsHorizontalScrollIndicator={false}
                    />
                    <View style={{ width: 40, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={loadNextDays}
                            style={{ width: 30, height: 30 }}
                        >
                            <AntDesign name='right' size={24} color='black' />
                        </TouchableOpacity>
                    </View>
                </View>

                {selectedDate && (
                    <View style={styles.appointmentsContainer}>
                        {renderAppointments()}
                    </View>
                )}
            </View>
            <View style={{ height: 170 }} />
        </ScrollView>
    );
};

export default MyCarousel;
