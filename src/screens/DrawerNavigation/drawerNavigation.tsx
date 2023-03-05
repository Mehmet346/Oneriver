import * as React from 'react';
import { Image, TouchableOpacity, StyleSheet } from "react-native";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Trade from './Trade/index';
import Wallet from './Wallet/index';
import TabStack from '../TabNavigator/tabNavigator';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = (route, color) => {
  let IconName;
  switch (route.name) {
    case 'Trade':
      IconName = "plus"
      break;

    case "Wallet":
      IconName = "minus"
      break;

  }
  return (
    <FontAwesomeIcon name={IconName} size={18} color={color} />
  );
}

 const DrawerStack = () => {
  return (

    <Drawer.Navigator screenOptions={({ route }) => ({
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTransparent: true,
      headerRightContainerStyle: {
        marginRight: 10,
      },
      headerTitle: '',
      headerRight: () => (<TouchableOpacity><Image style={{marginRight: 10, resizeMode: 'contain'}} source={require('../../assets/png/find.png')}/></TouchableOpacity>),
      headerTintColor: '#1A4184',
      drawerActiveBackgroundColor: '#eeeeee',
      drawerActiveTintColor: 'black',
      drawerInActiveTintColor: 'white',
      drawerType: 'front',
      drawerStyle: [
        {
          display: "flex"
        },
        null
      ],
      drawerIcon: ({ color }) =>
        screenOptions(route, color),
    })} initialRouteName='Trade'>
      <Drawer.Screen name="home" component={Trade} />
      <Drawer.Screen name="page" component={Wallet} />
    </Drawer.Navigator>
  );
}

const style = StyleSheet.create({
})
export default DrawerStack
