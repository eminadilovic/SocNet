import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import { useNetInfo } from '@react-native-community/netinfo';

function OfflineNotice(props) {
  const netInfo = useNetInfo();  

  if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
  return (
    <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
    </View>
  );

  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 90,
    position: "relative",
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent:'center',
    top:30,
    width: '100%',
  },
  text:{
    color: colors.white,
    justifyContent:'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});

export default OfflineNotice;