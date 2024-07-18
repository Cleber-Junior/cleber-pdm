import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../assets/images/colors';
import LogoutButton from '../components/LogoutButton';

const Home = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => false,
      title: 'Usuário',
      headerStyle: {backgroundColor: Colors.primary},
      headerTitleStyle: {color: Colors.white},
      headerRigth: <LogoutButton />,
    });
  }, []);

  console.log(LogoutButton);

  return (
    <View style={styles.container}>
      <LogoutButton />
      <Text style={styles.texto}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  texto: {
    fontSize: 24,
    color: '#ff0000',
  },
});

export default Home;
