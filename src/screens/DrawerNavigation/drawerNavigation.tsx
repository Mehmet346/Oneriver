import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


//@ts-ignore 
import Trade from '../TabNavigator/Trade/index';
//@ts-ignore 
import Wallet from '../TabNavigator/Wallet/index';
import TabStack from "../TabNavigator/tabNavigator";

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


const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
          <DrawerItem
        label="Trade"
        onPress={() => {navigation.navigate('Trade')}}
      />
          <DrawerItem
        label="Wallet"
        onPress={() => {navigation.navigate('Wallet')}}
      />
    </DrawerContentScrollView>
  );
}
  


const DrawerStack = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={({ route }) => ({
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
    })}>
     
      <Drawer.Screen name="Wallet" component={TabStack} />
    </Drawer.Navigator>
  );
}

export default DrawerStack
