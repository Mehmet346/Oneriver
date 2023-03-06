import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

//@ts-ignore 
import Trade from './Trade/index';
//@ts-ignore 
import Wallet from './Wallet/index';

const Drawer = createDrawerNavigator();

const screenOptions = (route, color) => {   //create to Drawer Navigation icon fabric pattern
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
      headerRight: () => (<TouchableOpacity><Image style={{ marginRight: 10, resizeMode: 'contain' }} source={require('../../assets/png/find.png')} /></TouchableOpacity>),
      headerTintColor: '#1A4184',
      drawerActiveBackgroundColor: '#1A4184',
      drawerActiveTintColor: '#FFFFFF',
      drawerInActiveTintColor: '#FFFFFF',
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
      <Drawer.Screen name="Trade" component={Trade} />
      <Drawer.Screen name="Wallet" component={Wallet} />
    </Drawer.Navigator>
  );
}

export default DrawerStack
