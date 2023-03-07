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

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Trade"
        onPress={() => {navigation.navigate('Trade')}}
        
        icon={({focused, color, size}) => (
          <FontAwesomeIcon name={'home'} color={"#1A4184"} size={20}/>
        )}
      />
      <DrawerItem
        label="Transaction"
        onPress={() => {navigation.navigate('Transaction')}}
        icon={({focused, color, size}) => (
          <FontAwesomeIcon name={'history'} color={"#1A4184"} size={20}/>
        )}
      />
      <DrawerItem
        label="Wallet"
        onPress={() => {navigation.navigate('Wallet')}}
        icon={({focused, color, size}) => (
          <FontAwesomeIcon name={'btc'} color={"#1A4184"} size={20}/>
        )}
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
     })}> 
      <Drawer.Screen name="Wallet" component={TabStack} />
    </Drawer.Navigator>
  );
}

export default DrawerStack
