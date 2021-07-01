import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, LogBox} from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import Scissor from '../components/svg/Scissors';
import Rock from '../components/svg/Rock';
import Paper from '../components/svg/Paper';
import Paperhand from '../components/svg/Paperhand';
import ScissorHand from '../components/svg/ScissorHand';
import StoneHand from '../components/svg/StoneHand';
import Watermark from '../components/svg/Watermark';
import Button from '../components/Buttton';
import * as Animatable from 'react-native-animatable';

export default function GameScreen({navigation}) {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    navigation.dangerouslyGetParent().setOptions({
      tabBarVisible: false,
    });
    return () => {
      navigation.dangerouslyGetParent().setOptions({
        tabBarVisible: true,
      });
    };
  }, []);
  const StoneRef = useRef(null);
  const ScissorRef = useRef(null);
  const PaperRef = useRef(null);
  const ComputerStoneRef = useRef(null);
  const ComputerScissorRef = useRef(null);
  const ComputerPaperRef = useRef(null);
  const [isStone, setIsStone] = useState(false);
  const [isPaper, setisPaper] = useState(false);
  const [isScissor, setisScissor] = useState(false);
  const [isComputerStone, setIsComputerStone] = useState(false);
  const [isComputerPaper, setisComputerPaper] = useState(false);
  const [isComputerScissor, setisComputerScissor] = useState(false);
  const [computerScore, setComputerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [result, setResult] = useState('Select Your Move');
  const show = {
    0: {bottom: -520},
    1: {bottom: -150},
  };
  const hide = {
    0: {bottom: -150},
    1: {bottom: -520},
  };
  const playerTwoShow = {
    0: {top: -500},
    1: {top: -150},
  };
  const playerTwoHide = {
    0: {top: -150},
    1: {top: -520},
  };
  const getWinner = (computer, player) => {
    if (computer == player) {
      return -1;
    }
    if (player == 'stone') {
      if (computer == 'paper') {
        return 0;
      } else {
        return 1;
      }
    }
    if (player == 'scissor') {
      if (computer == 'stone') {
        return 0;
      } else {
        return 1;
      }
    }
    if (player == 'paper') {
      if (computer == 'scissor') {
        return 0;
      } else {
        return 1;
      }
    }
  };
  const ComputersTurn = async playerTurn => {
    const value = Math.round(Math.random() * 2);
    let computerTurn = '';
    isComputerScissor &&
      ComputerScissorRef.current.animate(playerTwoHide) &&
      setisComputerScissor(false);
    isComputerStone &&
      ComputerStoneRef.current.animate(playerTwoHide) &&
      setIsComputerStone(false);
    isComputerPaper &&
      ComputerPaperRef.current.animate(playerTwoHide) &&
      setisComputerPaper(false);
    if (value == 0) {
      setIsComputerStone(true);
      ComputerStoneRef.current.animate(playerTwoShow);
      computerTurn = 'stone';
    }
    if (value == 1) {
      setisComputerScissor(true);
      ComputerScissorRef.current.animate(playerTwoShow);
      computerTurn = 'scissor';
    }
    if (value == 2) {
      setisComputerPaper(true);
      ComputerPaperRef.current.animate(playerTwoShow);
      computerTurn = 'paper';
    }

    if (getWinner(computerTurn, playerTurn) == -1) {
      setResult('Its a Draw');
    }
    if (getWinner(computerTurn, playerTurn) == 1) {
      setResult('You Won');
      setPlayerScore(playerScore + 1);
    }
    if (getWinner(computerTurn, playerTurn) == 0) {
      setResult('You Lose');
      setComputerScore(computerScore + 1);
    }

    console.log(value, playerTurn);
  };
  if (playerScore >= 5 || computerScore >= 5) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#2D2599',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Rubik-Medium',
            color: 'white',
            fontSize: 30,
            marginHorizontal: 5,
          }}>
          Game Over !
        </Text>
        <Text
          style={{
            fontFamily: 'Rubik-Medium',
            color: 'white',
            fontSize: 30,
            marginHorizontal: 5,
          }}>
          {playerScore >= 5 ? 'You Won !' : 'You Lose !'}
        </Text>

        <Button
          name="Play Again"
          handleClick={() => {
            setComputerScore(0);
            setPlayerScore(0);
            setResult('Select Your Move');
          }}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#2D2599',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActionButton buttonColor="#8692AA">
        <ActionButton.Item
          buttonColor="transparent"
          title="New Task"
          onPress={() => {
            setIsStone(true);
            setResult('');
            isScissor &&
              ScissorRef.current.animate(hide) &&
              setisScissor(false);

            isPaper && PaperRef.current.animate(hide) && setisPaper(false);

            StoneRef.current.animate(show);
            ComputersTurn('stone');
          }}>
          <Rock />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="transparent"
          title="Notifications"
          onPress={() => {
            setisScissor(true);
            setResult('');
            isStone && StoneRef.current.animate(hide) && setIsStone(false);

            isPaper && PaperRef.current.animate(hide) && setisPaper(false);

            ScissorRef.current.animate(show);
            ComputersTurn('scissor');
          }}>
          <Scissor />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="transparent"
          title="All Tasks"
          onPress={() => {
            setisPaper(true);
            setResult('');
            isStone && StoneRef.current.animate(hide) && setIsStone(false);

            isScissor &&
              ScissorRef.current.animate(hide) &&
              setisScissor(false);

            PaperRef.current.animate(show);
            ComputersTurn('paper');
          }}>
          <Paper />
        </ActionButton.Item>
      </ActionButton>
      {/* Player hands start */}
      <Animatable.View style={styles.handPosition} ref={PaperRef}>
        <Paperhand />
      </Animatable.View>
      <Animatable.View style={styles.handPosition} ref={StoneRef}>
        <StoneHand />
      </Animatable.View>
      <Animatable.View style={styles.handPosition} ref={ScissorRef}>
        <ScissorHand />
      </Animatable.View>
      {/* player hands ends */}
      {/* computer hands starts */}
      <Animatable.View style={styles.InverthandPosition} ref={ComputerPaperRef}>
        <Paperhand />
      </Animatable.View>
      <Animatable.View style={styles.InverthandPosition} ref={ComputerStoneRef}>
        <StoneHand />
      </Animatable.View>
      <Animatable.View
        style={styles.InverthandPosition}
        ref={ComputerScissorRef}>
        <ScissorHand />
      </Animatable.View>
      {/* computer hands ends */}
      <View style={{zIndex: -3, position: 'absolute'}}>
        <Watermark />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Animatable.Text style={styles.playerText} animation="zoomIn">
          {playerScore}
        </Animatable.Text>
        <Animatable.Text style={styles.resultText} animation="zoomIn">
          {result}
        </Animatable.Text>

        <Animatable.Text style={styles.computerText} animation="zoomIn">
          {computerScore}
        </Animatable.Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  handPosition: {position: 'absolute', bottom: -510, left: '25%', zIndex: -1},
  InverthandPosition: {
    position: 'absolute',
    top: -500,
    left: '25%',
    zIndex: -1,
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  resultText: {
    fontFamily: 'Rubik-Medium',
    color: 'white',
    fontSize: 30,
    marginHorizontal: 5,
  },
  playerText: {
    fontFamily: 'Rubik-Medium',
    color: '#90C67B',
    fontSize: 30,
    marginHorizontal: 5,
  },
  computerText: {
    fontFamily: 'Rubik-Medium',
    color: '#FFB24C',
    fontSize: 30,
    marginHorizontal: 5,
  },
});
