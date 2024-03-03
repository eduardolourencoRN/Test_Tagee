import { Dimensions, Platform, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        paddingTop: Platform.OS === 'android' ? 50 : 50,
    },
    flatlistContainer: {
        alignItems: 'center',
    },
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
        fontSize: 12,
    },
    month: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
        marginTop: 10,
    },
    appointmentsContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    appointmentItem: {
        width: 100,
        height: 100,
        marginBottom: 5,
        backgroundColor: 'lightgray',
        padding: 10,
    },
    containerFlatList: { flexDirection: 'row', alignItems: 'center' },
    date: {
        fontSize: 18,
    },
});
