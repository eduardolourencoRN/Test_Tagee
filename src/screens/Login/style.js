import { Dimensions, Platform, StyleSheet } from 'react-native';
const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
    container: {
        width: widthScreen,
        height: heightScreen,
        alignItems: 'center',
    },
    containerSafeAreaView: {
        width: widthScreen,
        height: heightScreen,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 50 : 50,
    },
    title: {
        fontSize: 12,
        position: 'absolute',
        left: 45,
        bottom: 80,
        fontWeight: '600',
        color: '#141042',
    },
    input: {
        width: '80%',
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#B5BDC7',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 5,
        paddingBottom: 10,
    },
    Button: {
        width: '80%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#1E9FF2',
        borderRadius: 5,
        gap: 10,
        backgroundColor: '#fff',
    },
    ViewImage: {
        width: widthScreen,
        height: heightScreen / 4,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
    },
    image: {
        width: 180,
        height: 180,
    },
    ViewInputs: {
        width: widthScreen,
        height: heightScreen / 4.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ViewContainerInput: {
        width: widthScreen,
        height: 80,
        alignItems: 'center',
    },
    ButtonForgotPassWord: {
        color: '#1E9FF2',
    },
    TitleForgotPassWord: {
        color: '#1E9FF2',
        fontSize: 12,
        position: 'absolute',
        left: 50,
        top: 5,
    },
    TitleButtonEnter: {
        color: '#1E9FF2',
        fontSize: 15,
    },
    ButtonBack: {
        width: widthScreen,
        height: 35,
        position: 'absolute',
        left: 20,
        justifyContent: 'center',
    },
});
