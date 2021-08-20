import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login'
import RegisterCustomer from '../Screens/RegisterCustomer';
import CreatePassCustomer from '../Screens/CreatePassCustomer';
import AddNumberCustomer from '../Screens/AddNumberCustomer';
import AddAddressCustomer from '../Screens/AddAddressCustomer';
import RegisterMitra from '../Screens/RegisterMitra';
import Tab from './tabNavigator';

const AuthStack = createStackNavigator();

const Router = () => {
  return(
      <NavigationContainer>
        <AuthStack.Navigator initialRouteName="RegisterMitra">
          <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <AuthStack.Screen name="RegisterCustomer" component={RegisterCustomer} options={{ headerShown: false }}  />
          <AuthStack.Screen name="CreatePassCustomer" component={CreatePassCustomer} options={{ headerShown: false }}  />
          <AuthStack.Screen name="AddNumberCustomer" component={AddNumberCustomer} options={{ headerShown: false }}  />
          <AuthStack.Screen name="AddAddressCustomer" component={AddAddressCustomer} options={{ headerShown: false }} />
          <AuthStack.Screen name="RegisterMitra" component={RegisterMitra} options={{ headerShown: false }}  />
          <AuthStack.Screen name="Home" component={Tab} options={{ headerShown: false }} />
        </AuthStack.Navigator>
      </NavigationContainer>
  )
}

export default Router;
