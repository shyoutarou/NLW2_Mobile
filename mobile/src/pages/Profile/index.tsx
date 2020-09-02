import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import {
  BorderlessButton,
  RectButton,
  TouchableOpacity,
} from "react-native-gesture-handler";
// import { PacmanIndicator } from "react-native-indicators";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';

import backgroundImg from "../../../assets/images/icons/purble-bubbles-backgorund.png";
import backIcon from "../../../assets/images/icons/back.png";
import logoImg from "../../../assets/images/logo.png";
import cameraIcon from "../../../assets/images/icons/camera-icon.png";

import styles from "./styles";

import { useCustomHookAuth } from "../../contexts/auth";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";

export default function Profile() {
  const navigation = useNavigation();
  const { user, signOut, updateUserAvatar } = useCustomHookAuth();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [avatar, setAvatar] = useState(user?.avatar || "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png");
  const [bio, setBio] = useState(user?.bio);
  const [whatsapp, setWhatsApp] = useState(user?.whatsapp);
  const [subject, setSubject] = useState(user?.subject);
  const [cost, setCost] = useState(user?.cost);
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);
  let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/henriqueeloopes/upload';

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function removeScheduleItem() {
    setScheduleItems([{ week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItem = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });
    setScheduleItems(updatedScheduleItem);
  }

  async function handlePressSave() {
    if (
      (name && name.length < 5) ||
      !name ||
      (email && email.length < 5) ||
      !email ||
      (whatsapp && whatsapp.length < 5) ||
      !whatsapp ||
      (bio && bio.length < 5) ||
      !bio ||
      (subject && subject.length < 2) ||
      !subject ||
      !cost
    ) {
      return Alert.alert("Proffy", "por favor, preencha todos os campos!");
    }
    try {
        const response = await api.post('/update-user', { email, name, avatar, whatsapp, bio }, { timeout: 2000 });
        if (response.status != 200){
          return Alert.alert("Proffy", "Ocorreu um erro ao salvar seus dados!");
        }
        await AsyncStorage.removeItem("@RNAuth:user");
        return navigation.navigate("SucessProfileUpdate");
    } catch (error) {
      console.log(error)
      return false;
    }
    return Alert.alert("Proffy", "Ocorreu um erro ao salvar seus dados!");
  }

  async function openImagePickerAsync(){
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Precisamos de sua permissao para voce escolher sua imagem!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
      quality: 0.7,
      allowsMultipleSelection: false,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;

    let data = {
      "file": base64Img,
      "upload_preset": 'ml_default'
    }

    fetch(CLOUDINARY_URL, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    }).then(async r => {
      let data = await r.json();
      if (data.url){
        if (!updateUserAvatar(data.url)){
          return Alert.alert('Proffy', 'Ocorreu um erro ao enviar a sua foto!');
        }
        return setAvatar(data.url);
      }else{
        Alert.alert('Proffy', 'Ocorreu um erro ao enviar a sua foto!')
      }
    }).catch(err => console.log(err))
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <BorderlessButton onPress={() => navigation.navigate("Landing")}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Text style={styles.headerText}>Meu Perfil</Text>
        <Image
          source={logoImg}
          resizeMode="contain"
          style={{ height: 30, width: 50 }}
        />
      </View>

      <View style={styles.topContainer}>
        <ImageBackground
          source={backgroundImg}
          style={styles.banner}
          resizeMode="contain"
        >
          <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
            <Image source={{ uri: avatar }} style={styles.profileImg} />
            <BorderlessButton style={{ marginTop: -35 }} onPress={openImagePickerAsync} >
              <Image source={cameraIcon} />
            </BorderlessButton>
          </View>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileSubject}>{subject}</Text>
        </ImageBackground>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.profileDataContainer}>
          <Text style={styles.profileTitle}>Seus dados:</Text>
          <View style={styles.lineSeparator} />
          <Text style={styles.dataLabel}>Nome</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="Nome completo..."
            maxLength={40}
            placeholderTextColor="#6A6180"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Text style={styles.dataLabel}>E-mail</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="seu-email@gmail.com"
            maxLength={40}
            placeholderTextColor="#6A6180"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.dataLabel}>WhatsApp</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="(47) 9.8897-1458"
            maxLength={40}
            placeholderTextColor="#6A6180"
            value={whatsapp}
            onChangeText={(text) => setWhatsApp(text)}
          />
          <Text style={styles.dataLabel}>Bio</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="nos conte um pouco sobre voce..."
            maxLength={250}
            placeholderTextColor="#6A6180"
            multiline
            value={bio}
            onChangeText={(text) => setBio(text)}
          />

          <Text style={styles.profileTitle}>Sobre a aula</Text>
          <View style={styles.lineSeparator} />
          <Text style={styles.dataLabel}>Matéria</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="Geografia"
            maxLength={250}
            placeholderTextColor="#6A6180"
            multiline
            value={subject}
            onChangeText={(text) => setSubject(text)}
          />
          <Text style={styles.dataLabel}>Custo da sua hora por aula</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="Quanto custa a sua aula?"
            maxLength={250}
            placeholderTextColor="#6A6180"
            keyboardType="numeric"
            value={cost?.toString()}
            onChangeText={(text) => setCost(parseInt(text))}
          />

          <View style={styles.timeAvailable}>
            <View style={styles.timeAvailableTitle}>
              <Text style={styles.profileTitle}>Horários disponíveis</Text>
              <BorderlessButton onPress={addNewScheduleItem}>
                <Text style={styles.newTime}>+ Novo</Text>
              </BorderlessButton>
            </View>
            <View style={styles.lineSeparator} />

            {scheduleItems.map((item, i) => {
              return (
                <View key={i}>
                  <Text style={styles.dataLabel}>Dia da semana</Text>
                  <TextInput
                    style={styles.dataInput}
                    placeholder="Segunda-Feira"
                    maxLength={250}
                    placeholderTextColor="#6A6180"
                    multiline
                  />
                  <View style={styles.hoursSelectTitle}>
                    <Text style={styles.dataLabel}>Das</Text>
                    <Text style={styles.dataLabel}>Ate</Text>
                  </View>
                  <View style={styles.hoursSelectContainer}>
                    <TextInput
                      style={styles.hourInputContainer}
                      placeholder="09:00"
                      maxLength={2}
                      placeholderTextColor="#6A6180"
                      keyboardType="number-pad"
                    />
                    <TextInput
                      style={styles.hourInputContainer}
                      placeholder="15:00"
                      maxLength={2}
                      placeholderTextColor="#6A6180"
                      keyboardType="number-pad"
                    />
                  </View>
                  <RectButton
                    onPress={removeScheduleItem}
                    style={{ justifyContent: "center", flexDirection: "row" }}
                  >
                    <Text style={styles.deleteTime}>- Remover</Text>
                  </RectButton>
                </View>
              );
            })}

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handlePressSave}
              >
                {loading ? (
                    <ActivityIndicator size="large" color="#666" />
                //   <PacmanIndicator
                //     color="white"
                //     size={50}
                //     animating={loading}
                //   />
                ) : (
                  <Text style={styles.loginButtonText}>Salvar Alteracoes</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
