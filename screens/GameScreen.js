import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, LogBox} from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import Scissor from '../components/svg/Scissors';
import Rock from '../components/svg/Rock';
import Paper from '../components/svg/Paper';
import Paperhand from '../components/svg/Paperhand';
import ScissorHand from '../components/svg/ScissorHand';
import StoneHand from '../components/svg/StoneHand';
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
  const show = {
    0: {bottom: -520},
    1: {bottom: -100},
  };
  const hide = {
    0: {bottom: -100},
    1: {bottom: -520},
  };
  const playerTwoShow = {
    0: {top: -500},
    1: {top: -100},
  };
  const playerTwoHide = {
    0: {top: -100},
    1: {top: -520},
  };
  const ComputersTurn = () => {
    const value = Math.round(Math.random() * 2);
    return value;
  };
  return (
    <View style={{flex: 1, backgroundColor: '#2D2599'}}>
      <ActionButton buttonColor="#8692AA">
        <ActionButton.Item
          buttonColor="transparent"
          title="New Task"
          onPress={() => {
            setIsStone(true);
            isScissor &&
              ScissorRef.current.animate(hide) &&
              setisScissor(false);

            isPaper && PaperRef.current.animate(hide) && setisPaper(false);

            StoneRef.current.animate(show);
          }}>
          <Rock />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="transparent"
          title="Notifications"
          onPress={() => {
            setisScissor(true);
            isStone && StoneRef.current.animate(hide) && setIsStone(false);

            isPaper && PaperRef.current.animate(hide) && setisPaper(false);

            ScissorRef.current.animate(show);
          }}>
          <Scissor />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="transparent"
          title="All Tasks"
          onPress={() => {
            setisPaper(true);
            isStone && StoneRef.current.animate(hide) && setIsStone(false);

            isScissor &&
              ScissorRef.current.animate(hide) &&
              setisScissor(false);

            PaperRef.current.animate(show);
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
});
