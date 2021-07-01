import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import Avatar from '../assests/icons/avatar';
import Crystal from '../assests/icons/crystal';
import Coin from '../assests/icons/coin';
import Cup from '../components/svg/cup';
import Button from '../components/Buttton';

export default function PlayerStats() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRankModal, setIsOpenRankModal] = useState(false);

  return (
    <View style={styles.playerStatsContainer}>
      <TouchableOpacity
        onPress={() => {
          setIsOpen(!isOpen);
        }}>
        <View style={styles.playerNameContainer}>
          <Avatar height={41.383} width={35.852} />
          <Text style={styles.playerName}>Player 1</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.RankCard}>
        <TouchableOpacity
          onPress={() => {
            setIsOpenRankModal(!isOpenRankModal);
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'space-between',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={styles.RankText}>Beginner</Text>
          <Crystal />
        </TouchableOpacity>
      </View>
      <View style={styles.CoinCard}>
        <Text style={styles.CoinText}>40</Text>
        <Coin />
      </View>
      <View>
        <Modal
          visible={isOpen}
          transparent={true}
          onRequestClose={() => {
            setIsOpen(false);
          }}
          animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.playerModal}>
              <View style={{alignSelf: 'flex-end'}}>
                <Button
                  name="close"
                  handleClick={() => {
                    setIsOpen(false);
                  }}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.playerCard}>
                  <Avatar height={80} />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: 'Rubik-Bold',
                      fontSize: 25,
                      color: '#4A6495',
                      marginTop: 25,
                    }}>
                    Player 1
                  </Text>
                </View>
                <View style={styles.playerCard2}>
                  <Cup height={100} />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: 'Rubik-Bold',
                      fontSize: 25,
                      color: '#FCBD11',
                      marginTop: 25,
                    }}>
                    23
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: 'Rubik-Bold',
                      fontSize: 25,
                      color: '#4A6495',
                    }}>
                    Victories
                  </Text>
                </View>
              </View>
              <View style={{width: '90%'}}>
                <Button name="Settings" />
              </View>
            </View>
          </View>
        </Modal>
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
    height: 60,
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
  modalContainer: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'space-between',
  },
  playerModal: {
    height: '60%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  playerCard: {
    borderColor: '#E5E7EC',
    borderWidth: 1,
    height: '80%',
    width: '40%',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 10,
    borderRadius: 25,
  },
  playerCard2: {
    backgroundColor: '#E8F0FF',
    borderColor: '#E5E7EC',
    borderWidth: 1,
    height: '80%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 25,
  },
});
