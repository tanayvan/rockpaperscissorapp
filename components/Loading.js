import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Malehand from './svg/MaleHand';
import Femalehand from './svg/Femalehand';

export default function Loading() {
  return (
    <View style={styles.LoadingContainer}>
      <View style={{position: 'relative'}}>
        <Malehand style={styles.malehand} />
      </View>

      <Text style={styles.lodingText}>Rock Paper Scissor </Text>

      <View style={{position: 'relative'}}>
        <Femalehand style={styles.Femalehand} />
      </View>
      <View>
        <View style={styles.loadingBar}>
          <View style={styles.subLoadingbar}></View>
          <Text style={styles.loadingBarText}>Loading...</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoadingContainer: {
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  malehand: {
    position: 'absolute',
    right: -100,
  },
  Femalehand: {
    position: 'absolute',
    left: -100,
  },
  lodingText: {
    fontFamily: 'Rubik-Bold',
    color: '#FBC399',
    fontSize: 45,
    textAlign: 'center',
    textShadowColor: '#EA9975',
    textShadowOffset: {width: 3, height: 2},
    textShadowRadius: 1,
  },
  loadingBar: {
    position: 'relative',
    width: '50%',
    height: 50,
    backgroundColor: '#EA9975',
    borderRadius: 10,
    alignSelf: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subLoadingbar: {
    top: -2,
    left: 0,
    backgroundColor: '#FBC399',
    width: '50%',
    height: '100%',
    borderRadius: 20,
    position: 'absolute',
  },

  loadingBarText: {
    color: 'white',
    position: 'absolute',
    textAlign: 'center',
    fontFamily: 'Rubik-Bold',
    fontSize: 20,
  },
});
