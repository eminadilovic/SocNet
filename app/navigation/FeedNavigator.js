import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';
import routes from '../navigation/routes'

const Stack = createStackNavigator();

const FeedNavigator =()=>(
    <Stack.Navigator presentation='modal' headerShown={false} screenOptions={{headerShown: false, }}>
        <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} options={{headerShown: false}} />
        <Stack.Screen name={routes.LISTING_DETAILS} component={ListingDetailScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
);

export default FeedNavigator;