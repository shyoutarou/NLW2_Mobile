import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import sucessIcon from "../../../assets/images/icons/sucess-icon.png";
import backgroundImg from "../../../assets/images/sucess-sign-up-background.png";

import styles from "./styles";

function SucessSignUp() {
  const navigation = useNavigation();
  
  function handlePressNext(){
    return navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        resizeMode="contain"
        style={styles.backgroundImg}
      >
        <View style={styles.topContainer}>
          <Image source={sucessIcon} />
          <Text style={styles.title}>Cadastro concluído</Text>
          <Text style={styles.description}>Agora você faz parte da plataforma da Proffy</Text>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={handlePressNext} style={styles.loginButton} activeOpacity={0.6}>
            <Text style={styles.loginButtonText}>Fazer Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SucessSignUp;
