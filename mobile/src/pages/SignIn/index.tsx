import React, { useContext } from "react";
import { View , Button, StyleSheet} from "react-native";
import { signIn } from "../../services/auth";
import AuthContext from "../../contexts/auth";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 200,
      height: 200,
      justifyContent: 'center',
    },
  });

  const SignIn: React.FC = () => {

    const {signed, signIn} =  useContext(AuthContext);
    console.log(signed);

    function handleSign() {
      signIn();
    }
  
    return (
      <View style={styles.container}>
        <Button title="Sign In" onPress={handleSign} />
      </View>
    );
  };

export default SignIn;