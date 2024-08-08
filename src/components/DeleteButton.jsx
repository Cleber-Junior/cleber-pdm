import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Colors} from '../assets/images/colors';

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
    fontSize: 25,
    color: '#FFF',
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.red,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 250,
    height: 50,
    marginTop: 30,
  },
});
