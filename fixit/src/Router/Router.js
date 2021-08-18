import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login'
import Register from '../Screens/Register';
import Home from '../Screens/Home';
import Tab from './tabNavigator';

const AuthStack = createStackNavigator();

const Router = () => {
  return(
      <NavigationContainer>
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <AuthStack.Screen name="Register" component={Register} options={{ headerShown: false }}  />
          <AuthStack.Screen name="Home" component={Tab} options={{ headerShown: false }} />
        </AuthStack.Navigator>
      </NavigationContainer>
  )
}

export default Router;
