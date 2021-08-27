import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import TabCustomer from './tabCustomer';
import SearchCustomer from '../screens/SearchCustomer';
import DetailCustomer from '../screens/DetailMitra';
import EditProfile from '../screens/EditProfile';
import AccountSecurity from '../screens/AccountSecurity';
import PlacingAd from '../screens/PlacingAd';

const AuthStack = createStackNavigator();

const AuthStack3 = () => (
  <AuthStack.Navigator initialRouteName="Home">
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
      name="AccountSecurity"
      component={AccountSecurity}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="Placingad"
      component={PlacingAd}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

export default AuthStack3;
