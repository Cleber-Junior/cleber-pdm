import React from 'react';
import {Button, Text} from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import auth from '@react-native-firebase/auth';
import RNRestart from 'react-native-restart';
import Icon from 'react-native-vector-icons/AntDesign';

const LogoutButton = props => {
  const signOut = () => {
    AsyncStorage.removeItem('user')
      .then(() => {
        auth()
          .signOut()
          .then(() => {})
          .catch(e => {
            console.log('LogoutButton, signOut em auth signOut' + e);
          });
        RNRestart.Restart();
      })
      .catch(e => {
        console.log('LogoutButton, signOut em removeItem: ' + e);
      });
  };
  return (
    <ButtonExit onPress={signOut} underlayColor="transparent">
      <Icon name="logout" size={30} color="#fff" />
    </ButtonExit>
  );
};

export default LogoutButton;

const ButtonExit = styled.TouchableHighlight`
  width: 45px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  width: 30px;
  height: 30px;
`;
