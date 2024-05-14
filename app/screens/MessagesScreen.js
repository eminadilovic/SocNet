import React, { useState } from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: `asdas
        dasdasd
        asdasd
        asdasddasdasd asd
        asd as
        das 
        d
        asd 
        asdasdasd as
        das d
        asdasdasdasdas`,
        description: `asdas
        dasdasd
        asdasd
        asdasddasdasd asd
        asd as
        das 
        d
        asd 
        asdasdasd as
        das d
        asdasdasdasdas`,
        image: require('../assets/mosh.jpg')
    },
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //delete message from array
        setMessages(messages.filter((x)=>x.id !== message.id));
        //delete from server
    }

    return (
        <Screen>
        <FlatList 
        ItemSeparatorComponent={()=> <View style={{width:'100%', height: 1, backgroundColor: "grey"}} />}
        data={messages}
        keyExtractor={messages=>messages.id.toString()}
        renderItem={({item})=>
        <ListItem 
        onPress={()=>console.log("message seleceted", item)}
        title={item.title}
        subtitle={item.description}
        image={item.image}
        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
         />}
        refreshing= {refreshing}
        onRefresh={() => {

        setMessages([{
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },])
        }}

         />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;