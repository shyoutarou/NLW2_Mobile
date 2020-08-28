import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import sucessIcon from "../../../assets/images/icons/sucess-icon.png";
import backgroundImg from "../../../assets/images/sucess-sign-up-background.png";

import styles from "./styles";

function SucessProfileUpdate() {
  const navigation = useNavigation();
  
  function handlePressNext(){
    return navigation.navigate('Landing');
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
          <Text style={styles.title}>Cadastro Salvo</Text>
          <Text style={styles.description}>Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp</Text>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={handlePressNext} style={styles.loginButton} activeOpacity={0.6}>
            <Text style={styles.loginButtonText}>Finalizar ;)</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SucessProfileUpdate;
