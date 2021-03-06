import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useCustomHookAuth } from "../../contexts/auth";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  });
  
  const Dashboard: React.FC = () => {

    const { user, signOut } = useCustomHookAuth();
  
    function handleSignOut() {
      signOut();
    }
  
    return (
      <View style={styles.container}>
        <Text>{user?.name}</Text>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
    );
  };
  
export default Dashboard;