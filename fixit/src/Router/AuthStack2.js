import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import TabMitra from './tabMitra';
import SearchCustomer from '../screens/SearchCustomer';
import DetailCustomer from '../screens/DetailMitra';
import EditProfile from '../screens/EditProfile';
import UploadService from '../screens/UploadService';
import UploadFeed from '../screens/UploadFeed';
import PaymentConfirmation from '../screens/PaymentConfirmation';
import PaymentConfirmationProcess from '../screens/PaymentConfirmationProcess';

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
      name="UploadFeed"
      component={UploadFeed}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="PaymentConfirmation"
      component={PaymentConfirmation}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="PaymentConfirmationProcess"
      component={PaymentConfirmationProcess}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen2;
