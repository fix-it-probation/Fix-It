import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../Screens/SplashScreen';
import Onboarding from '../Screens/OnBoarding'
import Login from '../Screens/Login';
import RegisterCustomer from '../Screens/RegisterCustomer';
import CreatePassCustomer from '../Screens/CreatePassCustomer';
import AddNumberCustomer from '../Screens/AddNumberCustomer';
import AddAddressCustomer from '../Screens/AddAddressCustomer';
import SearchCustomer from '../Screens/SearchCustomer';
import DetailCustomer from '../Screens/DetailMitra';
import EditProfile from '../Screens/EditProfile';
import RegisterMitra from '../Screens/RegisterMitra';

const AuthStack = createStackNavigator();

const AuthStackScreen = ({navigation}) => (
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
