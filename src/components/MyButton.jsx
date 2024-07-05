import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';

const MyButton = props => {
  return (
    <TouchableHighlight style={styles.button} onPress={() => props.onClick()}>
      <Text style={styles.texto}>{props.texto}</Text>
    </TouchableHighlight>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  texto: {
    fontSize: 24,
    color: '#ff0000',
  },
  button: {
    backgroundColor: '#00ff44',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
