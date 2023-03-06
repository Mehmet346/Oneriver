import { NavigationContainer } from '@react-navigation/native';

import AuthStack from '../screens/Auth/authNavigator';
import DrawerStack from '../screens/DrawerNavigation/drawerNavigation';

const isLogged = (1);

export default function App({ navigation }) {
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