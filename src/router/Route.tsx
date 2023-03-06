import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthStack from '../screens/Auth/authNavigator';
import DrawerStack from '../screens/DrawerNavigation/drawerNavigation';


export default function App({ navigation }) {
    const { isLogged } = useSelector((state: RootState) => state.message);
    
    if (isLogged) {
        return (
            <NavigationContainer>
                <DrawerStack></DrawerStack>
            </NavigationContainer>
        );
    }
    else {
        return (
            <NavigationContainer>
                <AuthStack></AuthStack>
            </NavigationContainer>
        );
    }
}