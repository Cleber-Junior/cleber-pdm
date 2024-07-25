import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../../assets/images/colors';

const Button = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
`;

const TextName = styled.Text`
  font-size: 24px;
  color: ${Colors.white};
`;

const Home = ({title, onPress}) => {
  return (
    <Button onPress={onPress} underlayColor="transparent">
      <>
        <TextName>{title}</TextName>
      </>
    </Button>
  );
};

export default Home;
