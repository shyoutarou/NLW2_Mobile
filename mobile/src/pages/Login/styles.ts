import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  topBar: {
    backgroundColor: "#8257E5",
    flex: 4,
  },
  banner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: {
    width: 160,
    height: 60,
  },
  logoText: {
    color: "#D4C2FF",
    maxWidth: 150,
    fontFamily: "Archivo_400Regular",
    fontSize: 16,
  },
  bottomBar: {
    backgroundColor: "#FFF",
    flex: 5,
    paddingHorizontal: 30,
    marginTop: 40,
  },
  topLogin: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  fazerLoginText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
    color: "#32264D",
    lineHeight: 34,
  },
  criarContaText: {
    color: "#8257E5",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    lineHeight: 24,
  },
  error: {
    marginLeft: 5,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  InputContainer: {
    flexDirection: "column",
    backgroundColor: "#FAFAFD",
    borderRadius: 8,
  },
  inputText: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomLogin: {
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: 5,
    flexDirection: "row",
  },
  remebemberMeAndLostPassword: {
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: "row",
    flex: 1,
  },
  remebemberMeAndLostPasswordText: {
    color: "#9C98A6",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    lineHeight: 24,
  },
  loginButtonContainer: {},
  loginButton: {
    backgroundColor: "#DCDCE5",
    borderRadius: 8,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonSelected: {
    backgroundColor: "#04D361",
    borderRadius: 8,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#9C98A6",
    fontFamily: "Archivo_600SemiBold",
    fontSize: 16,
    lineHeight: 26,
  },
  loginButtonTextSelected: {
    color: "#FFFFFF",
    fontFamily: "Archivo_600SemiBold",
    fontSize: 16,
    lineHeight: 26,
  },
});

export default styles;
