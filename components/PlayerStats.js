import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Avatar from '../assests/icons/avatar';
import Crystal from '../assests/icons/crystal';
import Coin from '../assests/icons/coin';
export default function PlayerStats() {
  return (
    <View style={styles.playerStatsContainer}>
      <View style={styles.playerNameContainer}>
        <Avatar />
        <Text style={styles.playerName}>Player 1</Text>
      </View>
      <View style={styles.RankCard}>
        <Text style={styles.RankText}>Beginner</Text>
        <Crystal />
      </View>
      <View style={styles.CoinCard}>
        <Text style={styles.CoinText}>40</Text>
        <Coin />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  playerStatsContainer: {
    // backgroundColor: 'yellow',
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  playerNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerName: {
    marginLeft: 10,
    color: '#4A6495',
    fontFamily: 'Rubik-Bold',
    fontSize: 20,
    justifyContent: 'space-between',
  },
  RankCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    width: '30%',
    padding: 5,
  },
  CoinCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    width: '20%',
    padding: 5,
    marginHorizontal: 5,
  },
  RankText: {
    color: '#A061FF',
    fontFamily: 'Rubik-Bold',
  },
  CoinText: {
    color: '#FCBD11',
  },
});
