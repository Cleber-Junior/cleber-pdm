import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Container, Image} from './styled';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

const Preload = ({navigation}) => {
  const getUserCache = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      console.log('getUserCache');
      console.log(jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('Home: Erro em getUserCache ' + e);
    }
  };

  const loginUser = async () => {
    const user = await getUserCache();
    if (user) {
      auth()
        .signInWithEmailAndPassword(user.email, user.pass)
        .then(() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Home'}],
            }),
          );
        })
        .catch(e => {
          console.log('SignIn ' + e);
          switch (e.code) {
            case 'auth/invalid-email':
            case 'auth/invalid-credential':
            case 'auth/invalid-password':
              Alert.alert('Erro', 'E-mail ou senha inválidos');
              break;
          }
        });
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'SignIn'}],
        }),
      );
    }
  };

  useEffect(() => {
    loginUser();
  }, []);

  return (
    <Container>
      <Image source={require('../../assets/images/LogoMobile.png')} />
    </Container>
  );
};

export default Preload;
