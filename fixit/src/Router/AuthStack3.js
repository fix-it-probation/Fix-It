import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import TabCustomer from './tabCustomer';
import SearchCustomer from '../screens/SearchCustomer';
import DetailCustomer from '../screens/DetailMitra';
import EditProfile from '../screens/EditProfile';
import PlacingAd from '../screens/PlacingAd';

const AuthStack = createStackNavigator();

const AuthStackScreen3 = () => (
  <AuthStack.Navigator initialRouteName="PlacingAd">
    <AuthStack.Screen
      name="Home"
      component={TabCustomer}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="SearchCustomer"
      component={SearchCustomer}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="DetailMitra"
      component={DetailCustomer}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="PlacingAd"
      component={PlacingAd}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen3;
