import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import * as SplashScreen from 'expo-splash-screen';
import { navigationRef } from "./app/navigation/rootNavigation";
import logger from "./app/utility/logger";

logger.start();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };
useEffect(()=>{
  async function prepare(){
    try {
        await restoreUser(); 
    } catch (error) {
        console.log(error)
    } finally {
        setIsReady(true);
    }
    }
    prepare();

  }, []);
 
  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);
  if (!isReady) {
    <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
  }

  return (
    <AuthContext.Provider value={{user, setUser}} >
    <OfflineNotice />
    <NavigationContainer ref={navigationRef} theme={navigationTheme} onReady={onLayoutRootView}>
      {user? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
    </AuthContext.Provider>

  );
}


//Hải Yến
