import React, { useMemo, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from '../pages/Onboarding';

const FirstTImeStack = createStackNavigator();

const FirstTIme: React.FC = () => {

    return(

          <FirstTImeStack.Navigator initialRouteName='StudyBoard' headerMode='none'>
                <FirstTImeStack.Screen name='StudyBoard' component={() => <Onboarding number='01.' boardType='study'
                description='Encontre vários professores para ensinar você.' />} />
                <FirstTImeStack.Screen name='GiveClassBoard' component={() => <Onboarding number='02.' boardType='give-class'
                description='Ou dê aulas sobre o que você mais conhece.' />} />              
          </FirstTImeStack.Navigator>
    )
}

export default FirstTIme