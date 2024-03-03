import React from 'react';
import { View, Text } from 'react-native';
import AppointmentCarousel from './AppointmentCarousel'; // Importe o componente AppointmentCarousel

const FlatListWithControls = ({
    dates,
    selectedDate,
    handleDayPress,
    appointmentsData,
    loadPreviousDays,
    loadNextDays,
    styles, // Se você precisar passar estilos personalizados para este componente
}) => {
    return (
        <View style={[styles.flatlistContainer, { flexDirection: 'row' }]}>
            {dates.length > 0 ? (
                dates.map((item, index) => (
                    <AppointmentCarousel
                        key={index}
                        item={item}
                        selectedDate={selectedDate}
                        handleDayPress={handleDayPress}
                        appointmentsData={appointmentsData}
                        selectedColor={{ backgroundColor: '#00BFFF' }}
                        unselectedColor={{ backgroundColor: '#87CEFA' }}
                    />
                ))
            ) : (
                <Text>No items</Text>
            )}
        </View>
    );
};

export default FlatListWithControls;
