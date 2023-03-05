import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Trade from './Trade/index';
import Wallet from './Wallet/index';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
    let IconName;

    switch (route.name) {
        case 'Trade':
            IconName = "home"
            break;

        case "Wallet":
            IconName = "btc"
            break;

    }
    return (
        <FontAwesomeIcon name={IconName} size={30} color={color} />
    );
}

const TabStack = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#FFFFFF',
            tabBarInactiveTintColor: 'black',
            tabBarShowLabel: false,
            tabBarStyle: [
                {
                    display: "flex",
                    backgroundColor: "#1A4184",
                },
                null
            ],
            tabBarIcon: ({ color }) =>
                screenOptions(route, color),
        })}>
            <Tab.Screen name="Trade" component={Trade} />
            <Tab.Screen name="Wallet" component={Wallet} />
        </Tab.Navigator>
    )
}

export default TabStack;