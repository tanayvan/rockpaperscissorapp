import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Buttton({name, handleClick}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handleClick}>
      <View>
        <Text
          style={{
            color: '#B67C62',
            fontFamily: 'Rubik-Bold',
            textTransform: 'uppercase',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#FBC399',
    margin: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});
