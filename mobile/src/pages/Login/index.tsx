import React, { useContext } from "react";
import { View , Button, StyleSheet} from "react-native";
import { useCustomHookAuth } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  });

  const Login: React.FC = () => {

    const navigation = useNavigation()
    
    const {signed, signIn, user} = useCustomHookAuth();
    console.log(signed);
    console.log(user);

    function handleSign() {
      signIn();

      navigation.navigate('Landing', {
        user: user
      })
    }
  
    return (
      <View style={styles.container}>
        <Button title="Sign In" onPress={handleSign} />
      </View>
    );
  };

export default Login;