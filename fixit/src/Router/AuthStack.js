import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import Onboarding from '../screens/OnBoarding'
import Login from '../screens/Login';
import RegisterCustomer from '../screens/RegisterCustomer';
import CreatePassCustomer from '../screens/CreatePassCustomer';
import AddNumberCustomer from '../screens/AddNumberCustomer';
import AddAddressCustomer from '../screens/AddAddressCustomer';
import SearchCustomer from '../screens/SearchCustomer';
import DetailCustomer from '../screens/DetailMitra';
import EditProfile from '../screens/EditProfile';
import RegisterMitra from '../screens/RegisterMitra';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="OnBoarding"
      component={Onboarding}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="RegisterCustomer"
      component={RegisterCustomer}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="CreatePassCustomer"
      component={CreatePassCustomer}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="AddNumberCustomer"
      component={AddNumberCustomer}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="AddAddressCustomer"
      component={AddAddressCustomer}
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
      name="RegisterMitra"
      component={RegisterMitra}
      options={{headerShown: false}}
    />
   
  </AuthStack.Navigator>
);

export default AuthStackScreen;
