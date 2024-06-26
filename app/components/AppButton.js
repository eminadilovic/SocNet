import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors'


function AppButton({title, onPress, color = "primary"}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]}
        onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        padding:15,
        marginVertical: 10
    },
    text: {
        fontSize: 18,
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
})

export default AppButton;