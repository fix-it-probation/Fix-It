import React, {useState, useMemo, useReducer, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack1 from './AuthStack1';
import AuthStackScreen2 from './AuthStack2';
import AuthStackScreen3 from './AuthStack3';
import {AuthContext} from '../components/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen/component';
import Onboarding from '../screens/OnBoarding/component';
import Login from '../screens/Login/component';
import RegisterCustomer from '../screens/RegisterCustomer/component';
import CreatePassCustomer from '../screens/CreatePassCustomer/component';
import AddNumberCustomer from '../screens/AddNumberCustomer/component';
import AddAddressCustomer from '../screens/AddAddressCustomer/component';
import RegisterMitra from '../screens/RegisterMitra/component';


const AuthStack = createStackNavigator();

const Router = () => {
  const initialLoginState = {
    role_id: null,
    accessToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          role_id: action.role,
          accessToken: action.token,
        };
      case 'LOGIN':
        return {
          ...prevState,
          role_id: action.role,
          accessToken: action.token,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          role_id: null,
          accessToken: null,
        };
      case 'REGISTER':
        return {
          ...prevState,
          role_id: action.role,
          accessToken: action.token,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      _Login: async (role, token) => {
        const accessToken = String(token);
        const role_id = String(role);
        try {
          await AsyncStorage.setItem('accessToken', accessToken);
          await AsyncStorage.setItem('role_id', role_id);
          console.log('access token: ', accessToken);
        } catch (error) {
          console.log(error);
        }
        dispatch({type: 'LOGIN', role: role_id, token: accessToken});
      },
      Logout: async () => {
        try {
          await AsyncStorage.removeItem('accessToken');
        } catch (error) {
          console.log(error);
        }
        dispatch({type: 'LOGOUT'});
      },
      Register: () => {
        // setaccessToken('fgkj');
      },
    }),
    [],
  );

  const decideRole = () => {
    if (loginState.role_id === '1') {
      return <AuthStack1 />;
    } else if (loginState.role_id === '2') {
      return <AuthStackScreen2 />;
    } else if (loginState.role_id === '3') {
      return <AuthStackScreen3 />;
    }
  };

  useEffect(() => {
    setTimeout(async () => {
      let accessToken, role_id;
      accessToken = null;
      role_id = null;
      try {
        accessToken = await AsyncStorage.getItem('accessToken');
        role_id = await AsyncStorage.getItem('role_id');
      } catch (error) {
        console.log(error);
      }
      console.log('role_id', role_id);
      console.log('user token: ', accessToken);
      dispatch({type: 'RETRIEVE_TOKEN', role: role_id, token: accessToken});
    }, 100);
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {console.log(loginState.accessToken)}
        {loginState.accessToken !== null ? (
          decideRole()
        ) : (
          <AuthStack.Navigator initialRouteName="SplashScreen">
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
              name="RegisterMitra"
              component={RegisterMitra}
              options={{headerShown: false}}
            />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Router;
