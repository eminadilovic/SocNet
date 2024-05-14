import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import AppText from '../components/AppText';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

function UploadScreen({onDone, progress = 0, visible = false}) {
  return (
    <Modal visible={visible}>
    <View style={styles.container}>
    {   progress<1 ?
        <Progress.Bar color={colors.primary} progress={progress} />
        :
        <LottieView 
            source={require('../assets/lottie/done.json')}
            loop= {false}
            autoPlay
            onAnimationFinish={onDone}
            style={{width: 150}}
        />
    }
        
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});

export default UploadScreen;