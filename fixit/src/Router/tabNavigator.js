import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Profile from '../Screens/Profile';
import { View, Image } from "react-native";

const Tabs = createBottomTabNavigator();

const Tab = () => {
    return(
        <Tabs.Navigator tabBarOptions={{
            showLabel: false,
            style: {
              backgroundColor: 'green'
            }
          }}>
            <Tabs.Screen name="Home" component={Home} options={{tabBarIcon : ({focused}) => (
                <View>
                    <Image source={require('../../assets/image/home.png')} resizeMode="contain" style={{
                        width: 18, 
                        height: 18, 
                        tintColor: focused ? 'white' : 'black'}} />
                </View>
             ),
            }} />
            <Tabs.Screen name="Profile" component={Profile} options={{tabBarIcon : ({focused}) => (
                <View>
                    <Image source={require('../../assets/image/profile.png')} style={{
                        width: 18, 
                        height: 18, 
                        tintColor: focused ? 'white' : 'black'}} />
                </View>
             ),
            }} />
        </Tabs.Navigator>
    )
}

export default Tab;