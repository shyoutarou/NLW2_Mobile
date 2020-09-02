import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';
import Profile from '../pages/Profile';
import SucessProfileUpdate from '../pages/SucessProfileUpdate';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Landing" component={Landing} />
    <AppStack.Screen name="GiveClasses" component={GiveClasses} />
    <AppStack.Screen name="Study" component={StudyTabs} />
    <AppStack.Screen name="Profile" component={Profile} />
    <AppStack.Screen name="SucessProfileUpdate" component={SucessProfileUpdate} />    
  </AppStack.Navigator>
);

export default AppRoutes;