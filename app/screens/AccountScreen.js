import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import { StyleSheet, View, FlatList } from 'react-native';
import colors from '../config/colors';
import Icon from '../components/Icon';
import routes from '../navigation/routes';
import useAuth from '../auth/useAuth';


const menuItems = [
    {
        title: "My Listings",
        icon: {
            name:'format-list-bulleted',
            backgroundColor: colors.danger
        },
        targetScreen: routes.MESSAGES

    },
    {
        title: "My messages",
        icon: {
            name:'email',
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES
    },
]

function AccountScreen({navigation}) {
    const {user, logOut} = useAuth();

    return (
        <Screen style={styles.screen}>
        <View style={styles.container}>
         <ListItem 
            title={user.name}
            subtitle= {user.email}
            image={require('../assets/mosh.jpg')}
         />
         </View>
         <View style={styles.container}>
         <FlatList 
            data={menuItems}
            keyExtractor={menuItem => menuItem.title}
            renderItem={({item})=> 
        <ListItem
            onPress={()=>navigation.navigate(item.targetScreen)}
            title={item.title}
            IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
            /> }
         />
         </View>
         <ListItem 
            title='Log Out'
            IconComponent={<Icon name='logout' backgroundColor='#ffe66d'></Icon>}
            onPress={()=> logOut()}
         />
        </Screen>
    );  
}

const styles = StyleSheet.create({
    container:{
        marginBottom:20
    },
    screen: {
        marginVertical: 20,
        backgroundColor: colors.light
    }
})

export default AccountScreen;