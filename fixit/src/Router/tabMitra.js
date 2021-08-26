import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeMitra from "../screens/HomeMitra";
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import AddPost from "../screens/AddPost";
import Feed from '../screens/Feed';
import { View, Image, Text } from "react-native";
import IMAGES from '../configs';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_INACTIVE, COLOR_WHITE, FONT_PRIMARY_COLOR } from "../styles";

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
            <Tabs.Screen name="HomeMitra" component={HomeMitra} options={{tabBarIcon : ({focused}) => (
                <View style={{flexDirection: 'column'}}>
                    <Image source={IMAGES.home} resizeMode="contain" style={{
                        width: 20, 
                        height: 20,
                        alignSelf: 'center',
                        marginBottom: 3, 
                        tintColor: focused ? COLOR_BASE_PRIMARY_MAIN : COLOR_INACTIVE}} />
                    <Text style={{color: focused ? COLOR_BASE_PRIMARY_MAIN : FONT_PRIMARY_COLOR}}>Home</Text>
                </View>
             ),
            }} />
            <Tabs.Screen name="Feed" component={Feed} options={{tabBarIcon : ({focused}) => (
                <View style={{flexDirection: 'column'}}>
                    <Image source={IMAGES.feed} resizeMode="contain" style={{
                        width: 20, 
                        height: 20,
                        alignSelf: 'center',
                        marginBottom: 3, 
                        tintColor: focused ? COLOR_BASE_PRIMARY_MAIN : COLOR_INACTIVE}} />
                    <Text style={{color: focused ? COLOR_BASE_PRIMARY_MAIN : FONT_PRIMARY_COLOR}}>Feed</Text>
                </View>
             ),
            }} />
            <Tabs.Screen name="AddPost" component={AddPost} options={{tabBarIcon : ({focused}) => (
                <View style={{flexDirection: 'column'}}>
                    <Image source={IMAGES.add} resizeMode="contain" style={{
                        width: 20, 
                        height: 20,
                        alignSelf: 'center',
                        marginBottom: 3 }} />
                    <Text style={{color: focused ? COLOR_BASE_PRIMARY_MAIN : FONT_PRIMARY_COLOR}}>Add</Text>
                </View>
             ),
            }} />
            <Tabs.Screen name="Favorites" component={Favorites} options={{tabBarIcon : ({focused}) => (
                <View>
                    <Image source={IMAGES.favorites} resizeMode="contain" style={{
                        width: 20, 
                        height: 20,
                        alignSelf: 'center',
                        marginBottom: 3,  
                        tintColor: focused ? COLOR_BASE_PRIMARY_MAIN : COLOR_INACTIVE}} />
                    <Text style={{color: focused ? COLOR_BASE_PRIMARY_MAIN : FONT_PRIMARY_COLOR}}>Favorites</Text>
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
                    <Text style={{color: focused ? COLOR_BASE_PRIMARY_MAIN : FONT_PRIMARY_COLOR}}>Profile</Text>
                </View>
             ),
            }} />
        </Tabs.Navigator>
    )
}

export default Tab;