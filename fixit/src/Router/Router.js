import React, {useState, useMemo, useReducer, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tab from './tabCustomer';
import VerifyFeed from '../screens/Profile';
import AuthStackScreen from './AuthStack';
import {AuthContext} from '../components/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CookieManager from '@react-native-cookies/cookies';
import {createStackNavigator} from '@react-navigation/stack';
const AuthStack = createStackNavigator();

const Router = () => {
  const initialLoginState = {
    userName: null,
    accessToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          accessToken: action.token,
        };
      case 'LOGIN':
        return {
          ...prevState,
          accessToken: action.token,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          accessToken: null,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          accessToken: action.token,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      _Login: async token => {
        const accessToken = String(token);
        try {
          await AsyncStorage.setItem('accessToken', accessToken);
          console.log('access token: ', accessToken);
        } catch (error) {
          console.log(error);
        }
        dispatch({type: 'LOGIN', token: accessToken});
      },
      Logout: async() => {
        try {
          await AsyncStorage.removeItem('accessToken');
        } catch(error) {
          console.log(error);
        }
        dispatch({ type: 'LOGOUT' });
      },
      Register: () => {
        // setaccessToken('fgkj');
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let accessToken;
      accessToken = null;
      try {
        accessToken = await AsyncStorage.getItem('accessToken');
      } catch (error) {
        console.log(error);
      }
      console.log('user token: ', accessToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: accessToken});
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.accessToken == null ? (
          <AuthStack.Navigator
            AuthContent={props => <AuthContent {...props} />}>
            <AuthStack.Screen
              name="Home"
              component={Tab}
              options={{headerShown: false}}
            />
          </AuthStack.Navigator>
        ) : (
          <AuthStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Router;