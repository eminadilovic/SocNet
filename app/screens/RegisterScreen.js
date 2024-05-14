import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';

import {AppForm, SubmitButton, AppFormField, ErrorMessage} from '../components/forms/'
import useAuth from '../auth/useAuth';
import authApi from '../api/auth';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(4).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),

})

function RegisterScreen(props) {
    const [registerFailed, setRegisterFailed] = useState();
    const registerApi = useApi(authApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);

        if(!result.ok){
            if(result.data) setRegisterFailed(result.data.error);

        else{
            setRegisterFailed("An unexpected error occurred.")
        }
        return;
       } 
        //picking data property and rename it to authToken
        const {data: authToken} = await loginApi.request(userInfo.email, userInfo.password);
        auth.logIn(authToken);        
    }



    return (
        <>
        <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
        
        <Screen style={styles.container}>

            <AppForm 
            initialValues={{name:'', email:'', password:''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
            <ErrorMessage error={registerFailed} visible={registerFailed} />
            
            <AppFormField 
                name={'name'}
                placeholder="Name"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="name"
                icon="account"
            />
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
            <SubmitButton title={'Register'}/>
           
            </AppForm>
            
        </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10
    }
})

export default RegisterScreen;