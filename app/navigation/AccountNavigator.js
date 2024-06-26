import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import routes from '../navigation/routes'


const Stack = createStackNavigator();

const AccountNavigator =()=>(
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
        <Stack.Screen name={routes.MESSAGES} component={MessagesScreen}/>
    </Stack.Navigator>
);

export default AccountNavigator;