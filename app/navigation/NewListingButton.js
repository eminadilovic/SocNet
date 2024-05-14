import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
    <MaterialCommunityIcons name='plus-circle' size={30} color={colors.white}/>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        height: 80,
        width: 80,
        borderRadius: 40,
        bottom: 25,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
})