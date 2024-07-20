import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../assets/images/colors';
import LogoutButton from '../components/LogoutButton';

const Home = ({navigation}) => {
  const logOutUser = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      }),
    );
  };

  return (
    <View style={styles.header}>
      <Text style={styles.text}>Home</Text>
      <LogoutButton logout={logOutUser} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginLeft: 10,
    color: Colors.white,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: Colors.primary,
  },
});
