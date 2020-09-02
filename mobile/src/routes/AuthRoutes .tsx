import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Onboarding from '../pages/Onboarding';
import SucessSignUp from '../pages/SucessSignUp';
import LostPassword from '../pages/LostPassword';
import SucessResetSend from '../pages/SucessResetSend';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator initialRouteName='Onboarding'>
    <AuthStack.Screen name='StudyBoard' component={() => <Onboarding number='01.' boardType='study'
    description='Encontre vários professores para ensinar você.' />} />
    <AuthStack.Screen name='GiveClassBoard' component={() => <Onboarding number='02.' boardType='give-class'
    description='Ou dê aulas sobre o que você mais conhece.' />} />        
    <AuthStack.Screen name="Login" component={Login} />
    {/* <AuthStack.Screen name="Cadastro1" component={Cadastro1} /> */}
    <AuthStack.Screen name="SucessSignUp" component={SucessSignUp} />
    <AuthStack.Screen name="LostPassword" component={LostPassword} />
    <AuthStack.Screen name="SucessResetSend" component={SucessResetSend} />   
  </AuthStack.Navigator>
);

export default AuthRoutes;