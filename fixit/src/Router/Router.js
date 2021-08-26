import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import Onboarding from '../screens/OnBoarding';
import Login from '../screens/Login';
import RegisterCustomer from '../screens/RegisterCustomer';
import CreatePassCustomer from '../screens/CreatePassCustomer';
import AddNumberCustomer from '../screens/AddNumberCustomer';
import AddAddressCustomer from '../screens/AddAddressCustomer';
import SearchCustomer from '../screens/SearchCustomer';
import DetailCustomer from '../screens/DetailMitra';
import EditProfile from '../screens/EditProfile';

import RegisterMitra from '../screens/RegisterMitra';
import UploadService from '../screens/UploadService';
import UploadFeed from '../screens/UploadFeed';
import PaymentConfirmation from '../screens/PaymentConfirmation';
import PaymentConfirmationProcess from '../screens/PaymentConfirmationProcess';
import TabCustomer from './tabCustomer';
import TabMitra from './tabMitra';

const AuthStack = createStackNavigator();

const Router = () => {
  return(
      <NavigationContainer>
        <AuthStack.Navigator initialRouteName="PaymentConfirmationProcess">
          <AuthStack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <AuthStack.Screen name="OnBoarding" component={Onboarding} options={{ headerShown: false }} />
          <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <AuthStack.Screen name="RegisterCustomer" component={RegisterCustomer} options={{ headerShown: false }}  />
          <AuthStack.Screen name="CreatePassCustomer" component={CreatePassCustomer} options={{ headerShown: false }}  />
          <AuthStack.Screen name="AddNumberCustomer" component={AddNumberCustomer} options={{ headerShown: false }}  />
          <AuthStack.Screen name="AddAddressCustomer" component={AddAddressCustomer} options={{ headerShown: false }} />
          <AuthStack.Screen name="SearchCustomer" component={SearchCustomer} options={{ headerShown: false}} />
          <AuthStack.Screen name="DetailMitra" component={DetailCustomer} options={{ headerShown: false}} />
          <AuthStack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false}} />
          <AuthStack.Screen name="RegisterMitra" component={RegisterMitra} options={{ headerShown: false }}  />
          <AuthStack.Screen name="UploadService" component={UploadService} options={{ headerShown: false }}  />
          <AuthStack.Screen name="UploadFeed" component={UploadFeed} options={{ headerShown: false }}  />
          <AuthStack.Screen name="PaymentConfirmation" component={PaymentConfirmation} options={{ headerShown: false }}  />
          <AuthStack.Screen name="PaymentConfirmationProcess" component={PaymentConfirmationProcess} options={{ headerShown: false }}  />
          <AuthStack.Screen name="Home" component={TabCustomer} options={{ headerShown: false }} />
          <AuthStack.Screen name="HomeMitra" component={TabMitra} options={{ headerShown: false }} />
        </AuthStack.Navigator>
      </NavigationContainer>
  )
}

export default Router;
