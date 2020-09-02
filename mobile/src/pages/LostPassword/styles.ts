import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 3,
    backgroundColor: "#8257E5",
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
  midContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  bottomContainer: {
    flex: 4,
    paddingHorizontal: 20,
  },
  titleText: {
    color: "#32264D",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
    lineHeight: 34,
  },
  descriptionText: {
    color: "#6A6180",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Poppins_400Regular",
    maxWidth: 180,
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
    marginTop: 30,
    marginBottom: 10,
  },
  inputText: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    marginVertical: 20,
  },
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
