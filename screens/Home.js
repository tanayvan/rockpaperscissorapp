import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Fill from '../components/svg/Fill';
import MaleHand from '../components/svg/MaleHand';
import FemaleHand from '../components/svg/Femalehand';
import Blood from '../components/svg/blood';
import PlayerStats from '../components/PlayerStats';
import TournamentsCard from '../components/TournamentsCard';
import * as Animatable from 'react-native-animatable';

export default function Home({navigation}) {
  const maleAnimation = {
    from: {
      right: -250,
    },
    to: {
      right: -150,
    },
  };
  const femaleAnimation = {
    from: {
      left: -250,
    },
    to: {
      left: -150,
    },
  };
  const blood = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

  return (
    <View style={styles.HomeContainer}>
      <PlayerStats />
      <View style={styles.HandContainer}>
        <Fill />
        <Animatable.View style={styles.MaleHand} animation={maleAnimation}>
          <MaleHand />
        </Animatable.View>
        <Animatable.View style={styles.FemaleHand} animation={femaleAnimation}>
          <FemaleHand />
        </Animatable.View>
        <Animatable.View style={styles.blood} animation={blood} delay={500}>
          <Blood />
        </Animatable.View>
      </View>
      <Animatable.View style={styles.matchesContainer} animation="slideInLeft">
        <Text style={styles.matchesText}>Matches</Text>
        <Text style={styles.matchesSubText}>Many rounds and cool prizes</Text>
        <TournamentsCard
          handleClick={() => {
            navigation.navigate('GameScreen');
          }}
        />
        <TournamentsCard
          handleClick={() => {
            navigation.navigate('GameScreen');
          }}
        />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    backgroundColor: '#eee',
    height: '100%',
  },
  HandContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    position: 'relative',
  },
  MaleHand: {
    position: 'absolute',
    alignSelf: 'center',
    right: -150,
    zIndex: 3,
  },
  FemaleHand: {
    position: 'absolute',
    alignSelf: 'center',
    left: -150,
  },
  blood: {
    position: 'absolute',
    zIndex: 2,
  },
  matchesContainer: {},
  matchesText: {
    color: '#4A6495',
    fontFamily: 'Rubik-Medium',
    fontSize: 40,
    marginHorizontal: 20,
  },
  matchesSubText: {
    color: '#EBCBA5',
    marginHorizontal: 20,
    fontFamily: 'Rubik-Medium',
    fontSize: 20,
  },
});
