import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Fill from '../components/svg/Fill';
import MaleHand from '../components/svg/MaleHand';
import FemaleHand from '../components/svg/Femalehand';
import Blood from '../components/svg/blood';
import PlayerStats from '../components/PlayerStats';
import TournamentsCard from '../components/TournamentsCard';
export default function Home() {
  return (
    <View style={styles.HomeContainer}>
      <PlayerStats />
      <View style={styles.HandContainer}>
        <Fill />
        <MaleHand style={styles.MaleHand} />
        <FemaleHand style={styles.FemaleHand} />
        <Blood style={styles.blood} />
      </View>
      <View style={styles.matchesContainer}>
        <Text style={styles.matchesText}>Matches</Text>
        <Text style={styles.matchesSubText}>Many rounds and cool prizes</Text>
        <TournamentsCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    backgroundColor: '#eee',
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
