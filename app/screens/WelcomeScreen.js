import React from 'react';
import { Image, ImageBackground , StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes'

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground 
        blurRadius= {10}
        style={styles.background}
        source={require('../assets/background.jpg')}>
            
            <View style={styles.logoContainer}>

            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <Text style={styles.tagline}>Sell what you don't need</Text>
            </View>
            
            <View style={styles.buttonContainer}>
            <AppButton title = 'Login' color={'primary'} onPress={()=>navigation.navigate(routes.LOGIN)} />
            <AppButton title = 'Registration' color={"secondary"} onPress={()=>navigation.navigate(routes.REGISTER)}/>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems:"center",
    },
    logoContainer: {
        position: 'absolute',
        alignItems: "center",
        top: 70
    },
    buttonContainer: {
        padding:20,
        width:'100%'
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    },

    logo: {
        width: 100,
        height: 100, 
    }
})

export default WelcomeScreen;