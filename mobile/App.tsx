import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;




// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { AppLoading } from 'expo'

// import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
// import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
// import AppStack from './src/routes/AppStack';

// export default function App() {

//   let [fontsLoaded] = useFonts({
//     Archivo_400Regular,
//     Archivo_700Bold,
//     Poppins_400Regular,
//     Poppins_600SemiBold
//   })

//   if (!fontsLoaded){
//     return <AppLoading/>
//   } else {
//     return (
//       <>
//         <AppStack/>
//         <StatusBar style="auto"/>
//       </>
//     );
//   }
// }
