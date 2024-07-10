import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyButton from '../components/MyButton';

function Home(props) {
  const [contador, setContador] = useState(0);

  // useEffect(() => {
  //   console.log('Montou os componentes');
  // }, []);

  const Contar = () => {
    setContador(contador + 1);
  };
  const Zerar = () => {
    setContador(0);
  };

  return (
    <View>
      <Text style={styles.texto}>Olá Mundo</Text>
      <Text style={styles.texto}>Contador: {contador}</Text>
      <MyButton texto="Contar" onClick={Contar} />
      <MyButton texto="Zerar" onClick={Zerar} />
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 24,
    color: '#ff0000',
  },
});

export default Home;
