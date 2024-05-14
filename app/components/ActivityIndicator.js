import LottieView from 'lottie-react-native';
import React from 'react';
import {  StyleSheet, View } from 'react-native';


function ActivityIndicator({visible = false}) {
  
  return !visible? null : (
    <View style={styles.overlay}>
    <LottieView 
    style={{ flex:1, width:100 }}
    autoPlay 
    loop 
    source={require('../assets/lottie/lottieLoading.json')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'white',
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
    opacity: 0.8
  }
});

export default ActivityIndicator;