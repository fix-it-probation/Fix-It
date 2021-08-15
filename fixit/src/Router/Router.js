import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login'
import RegisterCustomer from '../screens/RegisterCustomer';
import CreatePassCustomer from '../screens/CreatePassCustomer';
import AddNumberCustomer from '../screens/AddNumberCustomer';
import AddAddressCustomer from '../screens/AddAddressCustomer';
import Tab from './tabNavigator';

const AuthStack = createStackNavigator();

const Router = () => {
  return(
      <NavigationContainer>
        <AuthStack.Navigator initialRouteName="RegisterCustomer">
          <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <AuthStack.Screen name="RegisterCustomer" component={RegisterCustomer} options={{ headerShown: false }}  />
          <AuthStack.Screen name="CreatePassCustomer" component={CreatePassCustomer} options={{ headerShown: false }}  />
          <AuthStack.Screen name="AddNumberCustomer" component={AddNumberCustomer} options={{ headerShown: false }}  />
          <AuthStack.Screen name="AddAddressCustomer" component={AddAddressCustomer} options={{ headerShown: false }} />
          <AuthStack.Screen name="Home" component={Tab} options={{ headerShown: false }} />
        </AuthStack.Navigator>
      </NavigationContainer>
  )
}

export default Router;
