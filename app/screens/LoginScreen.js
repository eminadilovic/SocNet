import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import AuthApi from '../api/auth';
import {ErrorMessage, AppForm, SubmitButton, AppFormField} from '../components/forms/';
import "core-js/stable/atob";
import useAuth from '../auth/useAuth';
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),

})

function LoginScreen(props) {
    const auth = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({email, password}) => {
        const result = await AuthApi.login(email, password);

        if(!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        auth.logIn(result.data);        
    }

    return (
        <Screen style={styles.container}
        >
            <Image source={require('../assets/logo-red.png')} style={styles.image} />
            <AppForm 
            initialValues={{email:'', password:''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
            <ErrorMessage error="Invalid email or password" visible={loginFailed} />
            <AppFormField 
                name={'email'}
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                icon="email"
            />
            <AppFormField 
                name={'password'}
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                textContentType="password"
                icon="lock"
            />
            <SubmitButton title={'Login'}/>
            </AppForm>
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    image:{
        width:80,
        height:80,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20
    },
    container:{
        padding:10
    }
})

export default LoginScreen;