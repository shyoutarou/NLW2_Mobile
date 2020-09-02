import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
    },
    backgroundImg: {
        flex: 1,
    },
    topContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
        marginTop: 30,
    },
    description: {
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        maxWidth: 280,
        marginTop: 10,
    },
    bottomContainer: {
        flex: 1,
        marginHorizontal: 30,
    },
    loginButton: {
        backgroundColor: '#04D361',
        borderRadius: 8,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        lineHeight: 26,
    },
});

export default styles;