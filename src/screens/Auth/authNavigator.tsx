//@ts-ignore 
import * as React from 'react';
//@ts-ignore 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//@ts-ignore 
import Login from './Login/index';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        //@ts-ignore 
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default AuthStack;