import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Onboarding from '../pages/Onboarding';
import SucessSignUp from '../pages/SucessSignUp';
import LostPassword from '../pages/LostPassword';
import SucessResetSend from '../pages/SucessResetSend';
import AsyncStorage from '@react-native-community/async-storage';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {

  const [firstTime, setFirstTime] = useState('true')
  
  useEffect(() => {
    AsyncStorage.getItem('firstTime').then(resp => {
        if(resp) {
            setFirstTime(resp)
        }
    }).catch(err => {})

  }, [])



 return (
    <AuthStack.Navigator initialRouteName={firstTime? 'StudyBoard' : 'Login'} >
      <AuthStack.Screen name="StudyBoard">
        {props => <Onboarding number='01.' boardType='study'
        description='Encontre vários professores para ensinar você.' {...props} />}
      </AuthStack.Screen>
  
      <AuthStack.Screen name="GiveClassBoard">
        {props => <Onboarding number='02.' boardType='give-class'
        description='Ou dê aulas sobre o que você mais conhece.' {...props} />}
      </AuthStack.Screen>      
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="SucessSignUp" component={SucessSignUp} />
      <AuthStack.Screen name="LostPassword" component={LostPassword} />
      <AuthStack.Screen name="SucessResetSend" component={SucessResetSend} />   
    </AuthStack.Navigator>
  )
} ;

export default AuthRoutes;