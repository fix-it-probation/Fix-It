import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeAdmin from '../screens/HomeAdmin';
import VerifyMitra from '../screens/VerifyMitra';
import VerifyFeed from '../screens/VerifyFeed';
import DetailMitraAdmin from '../screens/DetailMitraAdmin';
import DetailFeedAdmin from '../screens/DetailFeedAdmin';

const AuthStack = createStackNavigator();

const AuthStack1 = () => (
  <AuthStack.Navigator initialRouteName="HomeAdmin">
    <AuthStack.Screen
      name="HomeAdmin"
      component={HomeAdmin}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="VerifyMitra"
      component={VerifyMitra}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="VerifyFeed"
      component={VerifyFeed}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="DetailMitraAdmin"
      component={DetailMitraAdmin}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="DetailFeedAdmin"
      component={DetailFeedAdmin}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

export default AuthStack1;
