import { Dimensions, Platform, StyleSheet } from 'react-native';
const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
    container: {
        width: widthScreen,
        height: heightScreen,
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    containerSafeAreaView: {
        width: widthScreen,
        height: heightScreen,
        backgroundColor: '#FFF',
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
        borderBottomColor: '#141042',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 5,
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
        width: 130,
        height: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TitleForgotPassWord: {
        color: '#1E9FF2',
        fontSize: 12,
        position: 'absolute',
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

    errorMessageStyleView: {
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgoutPasswordStyle: {
        width: '80%',
        height: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    loadingStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
