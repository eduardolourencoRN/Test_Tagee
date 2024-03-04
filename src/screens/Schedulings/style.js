import { Dimensions, Platform, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    flatlistContainer: {
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    appointmentItem: {
        width: width / 1.4,
        height: 100,
        backgroundColor: '#ADD8E6',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    containerFlatList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    date: {
        fontSize: 18,
        fontWeight: '600',
    },
});
