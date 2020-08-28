import React from 'react'
import { AppLoading } from 'expo'
import AuthRoutes from './AuthRoutes ';
import { useCustomHookAuth } from '../contexts/auth';
import AppRoutes from './AppRoutes';
import { Archivo_400Regular, Archivo_700Bold, Archivo_600SemiBold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

const Routes: React.FC = () => {
  const { signed, loading } = useCustomHookAuth();

  let [fonstLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Archivo_600SemiBold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })
  if (loading || !fonstLoaded) {
    return <AppLoading />
  } else {
    return signed ? <AppRoutes /> : <AuthRoutes />;
  }
};

export default Routes;