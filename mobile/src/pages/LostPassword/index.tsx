import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, Image, KeyboardAvoidingView, Platform, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
// import { PacmanIndicator } from "react-native-indicators";
import { useNavigation } from "@react-navigation/native";

import backgroundImg from "../../../assets/images/icons/purble-bubbles-backgorund.png";
import logoImg from "../../../assets/images/logo.png";
import backIcon from '../../../assets/images/icons/back.png';

import styles from "./styles";

export default function LostPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

    useEffect(() => {
        if (email && email.length > 5){
            setValidated(true);
        }else{
            setValidated(false);
        }
    }, [email]);

    function handlePressNext(){
      return navigation.navigate('SucessResetSend');
    }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == "ios" ? "padding" : undefined}>
      <StatusBar style="light" />
      <View style={styles.topContainer}>
        <ImageBackground
          source={backgroundImg}
          style={styles.banner}
          resizeMode="contain"
        >
          <Image source={logoImg} style={styles.logoImg} resizeMode="contain" />
          <Text style={styles.logoText}>Sua plataforma de estudos online.</Text>
        </ImageBackground>
      </View>

      <View style={styles.midContainer}>
        <TouchableOpacity activeOpacity={0.1} onPress={() => {navigation.goBack()}}>
            <Image source={backIcon} style={{ height: 25, width: 25}} />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.titleText}>Esqueceu sua senha?</Text>
        <Text style={styles.descriptionText}>Não esquenta,</Text>
        <Text style={styles.descriptionText}>vamos dar um jeito nisso.</Text>
        {error ? (
          <View style={styles.error}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}
        <View style={styles.InputContainer}>
          <View style={styles.inputText}>
            <TextInput
              style={{ flex: 1 }}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="E-mail"
              placeholderTextColor="#9C98A6"
              maxLength={38}
              value={email}
              onChangeText={(text) => setEmail(text)}
              returnKeyType="go"
            />
          </View>
          </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={validated ? styles.loginButtonSelected : styles.loginButton}
            disabled={validated ? false : true}
            onPress={handlePressNext}
          >
            {loading ? (
              <ActivityIndicator size="large" color="#666" />
              // <PacmanIndicator color="white" size={50} animating={loading} />
            ) : (
              <Text
                style={
                  validated
                    ? styles.loginButtonTextSelected
                    : styles.loginButtonText
                }
              >
                Enviar
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
