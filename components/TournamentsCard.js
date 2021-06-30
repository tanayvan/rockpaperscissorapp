import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Hand from './svg/DrawHand';
import Coin from '../assests/icons/coin';
import Crystal from '../assests/icons/crystal';

export default function TournamentsCard() {
  return (
    <TouchableOpacity>
      <View style={styles.TournamentCard}>
        <Hand style={styles.hand} />
        <View>
          <Text style={styles.battletext}>FIGHT BATTLE</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.Prizetext}>PRIZES</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.Prizetext}>2</Text>
              <Coin style={{marginTop: 19, marginHorizontal: 1}} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.crystalText}>2</Text>
              <Crystal style={{marginTop: 19, marginHorizontal: 1}} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  TournamentCard: {
    backgroundColor: 'white',
    overflow: 'hidden',
    height: 200,
    position: 'relative',
    borderRadius: 10,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hand: {
    position: 'absolute',
    left: 0,
    bottom: -70,
  },
  battletext: {
    fontSize: 30,
    marginLeft: 45,
    fontFamily: 'Rubik-Bold',
    color: '#4A6495',
  },
  Prizetext: {
    fontSize: 20,
    marginLeft: 45,
    fontFamily: 'Rubik-Bold',
    color: '#4A6495',
    marginTop: 20,
    color: '#FCBD11',
  },
  crystalText: {
    color: '#8B38D6',
    fontSize: 20,
    marginLeft: 45,
    fontFamily: 'Rubik-Bold',
    marginTop: 20,
  },
});
