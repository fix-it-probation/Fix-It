import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import TabMitra from './tabMitra';
import SearchCustomer from '../screens/SearchCustomer';
import DetailCustomer from '../screens/DetailMitra';
import AccountSecurity from '../screens/AccountSecurity';
import EditProfile from '../screens/EditProfile';
import UploadService from '../screens/UploadService';
import UploadFeed from '../screens/UploadFeed';
import PaymentConfirmationService from '../screens/PaymentConfirmationService/';
import PaymentConfirmationFeed from '../screens/PaymentConfirmationFeed';
import PaymentConfirmationProcessService from '../screens/PaymentConfirmationProcessService';
import PaymentConfirmationProcessFeed from '../screens/PaymentConfirmationProcessFeed';

const AuthStack = createStackNavigator();

const AuthStackScreen2 = () => (
  <AuthStack.Navigator initialRouteName="HomeMitra">
    <AuthStack.Screen
      name="HomeMitra"
      component={TabMitra}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="SearchCustomer"
      component={SearchCustomer}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="AccountSecurity"
      component={AccountSecurity}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="DetailMitra"
      component={DetailCustomer}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="UploadService"
      component={UploadService}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="PaymentConfirmationService"
      component={PaymentConfirmationService}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="PaymentConfirmationProcessService"
      component={PaymentConfirmationProcessService}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="UploadFeed"
      component={UploadFeed}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="PaymentConfirmationFeed"
      component={PaymentConfirmationFeed}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="PaymentConfirmationProcessFeed"
      component={PaymentConfirmationProcessFeed}
      options={{headerShown: false}}
    />
    
  </AuthStack.Navigator>
);

export default AuthStackScreen2;
