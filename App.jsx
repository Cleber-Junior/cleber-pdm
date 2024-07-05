import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyButton from './src/components/MyButton';

function App() {
  const contar = () => {
    alert('clicou');
  };

  return (
    <View>
      <Text style={styles.texto}>Olá Mundo</Text>
      <MyButton texto="Salvar" onClick={contar} />
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 24,
    color: '#ff0000',
  },
});

export default App;
