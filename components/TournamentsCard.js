import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Hand from './svg/DrawHand';
import Coin from '../assests/icons/coin';
import Crystal from '../assests/icons/crystal';
import * as Animatable from 'react-native-animatable';

export default function TournamentsCard({handleClick}) {
  const handAnim = {
    from: {
      bottom: -200,
    },
    to: {
      bottom: -100,
    },
  };
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.TournamentCard}>
        <Animatable.View style={styles.hand} animation={handAnim}>
          <Hand />
        </Animatable.View>
        <View>
          <Text style={styles.battletext}>FIGHT BATTLE</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.Prizetext}>PRIZES</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.Prizetext}>2</Text>
              <Coin style={{marginTop: 19, marginHorizontal: 1}} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
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
    height: 100,
    position: 'relative',
    borderRadius: 10,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hand: {
    position: 'absolute',
    left: 10,
    bottom: -100,
  },
  battletext: {
    fontSize: 25,
    marginLeft: 45,
    fontFamily: 'Rubik-Bold',
    color: '#4A6495',
  },
  Prizetext: {
    fontSize: 15,
    marginLeft: 45,
    fontFamily: 'Rubik-Bold',
    color: '#4A6495',
    marginTop: 20,
    color: '#FCBD11',
  },
  crystalText: {
    color: '#8B38D6',
    fontSize: 15,
    marginLeft: 45,
    fontFamily: 'Rubik-Bold',
    marginTop: 20,
  },
});
