import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import AppText from './AppText';
import colors from '../config/colors';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons'


function ListItem({title, subtitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <GestureHandlerRootView >
        <Swipeable renderRightActions={renderRightActions}>

     <TouchableHighlight 
             onPress={onPress}
             underlayColor={"gray"}
             >
        
        <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
       {subtitle && <AppText style={styles.subtitle}  numberOfLines={2}>{subtitle}</AppText>}
        </View>
        <MaterialCommunityIcons name='chevron-right' size={25} color={colors.medium} />

        </View>
    
    </TouchableHighlight>
    </Swipeable>

   </GestureHandlerRootView>


    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    detailsContainer:{
        marginLeft: 10,
        justifyContent: 'center',
        flex:1,
        alignContent:'center'
        
    },
    title:{
    fontWeight: "500",
    fontSize: 20    
    },
    subtitle:{
        color: colors.medium,
        fontSize: 16    
    }
})

export default ListItem;