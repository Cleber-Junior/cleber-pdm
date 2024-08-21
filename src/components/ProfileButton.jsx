import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ProfileButton = ({userName, onClick}) => {
  return (
    <ButtonProfile onPress={() => onClick()} underlayColor="transparent">
      <>
        <Icon style={{marginLeft: 20}} name="user" size={30} color="#fff" />
        <View>{userName && <UserName>{userName}</UserName>}</View>
      </>
    </ButtonProfile>
  );
};

export default ProfileButton;

const ButtonProfile = styled.TouchableHighlight`
  width: 45px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const UserName = styled.Text`
  color: #fff;
  margin-left: 10px;
  font-size: 15px;
`;
