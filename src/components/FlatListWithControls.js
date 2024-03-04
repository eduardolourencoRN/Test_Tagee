// FlatListWithControls.js
import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importe os ícones conforme necessário
import AppointmentCarousel from './AppointmentCarousel';

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
                    style={{ width: 30, height: 30 }}
                >
                    <AntDesign name='right' size={24} color='black' />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FlatListWithControls;
