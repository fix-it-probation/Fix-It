import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Feed from '../screens/Feed';
import { View, Image, Text } from "react-native";
import IMAGES from '../configs';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_FIELD, COLOR_INACTIVE, COLOR_WHITE, FONT_PRIMARY_COLOR } from "../styles";

const Tabs = createBottomTabNavigator();

const Tab = () => {
    return(
        <Tabs.Navigator tabBarOptions={{
            showLabel: false,
            style: {
              backgroundColor: COLOR_WHITE,
              height: 60
            }
          }}>
            <Tabs.Screen name="Home" component={Home} options={{tabBarIcon : ({focused}) => (
                <View style={{flexDirection: 'column'}}>
                    <Image source={IMAGES.home} resizeMode="contain" style={{
                        width: 20, 
                        height: 20,
                        alignSelf: 'center',
                        marginBottom: 3, 
                        tintColor: focused ? COLOR_BASE_PRIMARY_MAIN : COLOR_INACTIVE}} />
                    <Text style={{color: FONT_PRIMARY_COLOR}}>Home</Text>
                </View>
             ),
            }} /><Tabs.Screen name="Search" component={Search} options={{tabBarIcon : ({focused}) => (
                <View style={{flexDirection: 'column'}}>
                    <Image source={IMAGES.search} resizeMode="contain" style={{
                        width: 20, 
                        height: 20,
                        alignSelf: 'center',
                        marginBottom: 3, 
                        tintColor: focused ? COLOR_BASE_PRIMARY_MAIN : COLOR_INACTIVE}} />
                    <Text style={{color: FONT_PRIMARY_COLOR}}>Search</Text>
                </View>
             ),
            }} />
            <Tabs.Screen name="Feed" component={Feed} options={{tabBarIcon : ({focused}) => (
                <View>
                    <Image source={IMAGES.feed} resizeMode="contain" style={{
                        width: 20, 
                        height: 20,
                        alignSelf: 'center',
                        marginBottom: 3,  
                        tintColor: focused ? COLOR_BASE_PRIMARY_MAIN : COLOR_INACTIVE}} />
                    <Text style={{color: FONT_PRIMARY_COLOR}}>Feed</Text>
                </View>
             ),
            }} />
            <Tabs.Screen name="Profile" component={Profile} options={{tabBarIcon : ({focused}) => (
                <View>
                    <Image source={IMAGES.profile} style={{
                        width: 20, 
                        height: 20,
                        alignSelf: 'center',
                        marginBottom: 3, 
                        tintColor: focused ? COLOR_BASE_PRIMARY_MAIN : COLOR_INACTIVE}} />
                    <Text style={{color: FONT_PRIMARY_COLOR}}>Profile</Text>
                </View>
             ),
            }} />
        </Tabs.Navigator>
    )
}

export default Tab;