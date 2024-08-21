import React, { useState } from 'react';
import {Container, Header} from './styles';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { UserContext } from '../../Context/UserProviders';

const UserProfile = ({navigation}) => {
  
  // TODO: Crud do Usuario

  const retornaHome = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Header>
        <Icon name="arrowleft" size={30} color="#fff" onPress={retornaHome} />
      </Header>
      <Text>Ola</Text>
    </Container>
  );
};

export default UserProfile;
