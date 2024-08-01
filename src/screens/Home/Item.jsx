import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../../assets/images/colors';

export default ({item, onPress}) => {
  return (
    <Button onPress={onPress} underlayColor="transparent">
      <>
        <TextName>{item.title}</TextName>
        <TextValue>Valor Atual: {item.currentvalue}</TextValue>
        <TextMeta>Valor Meta: {item.metavalue}</TextMeta>
        <TextDescription>{item.description}</TextDescription>
      </>
    </Button>
  );
};

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

const TextValue = styled.Text`
  font-size: 18px;
  color: ${Colors.white};
`;

const TextMeta = styled.Text`
  font-size: 18px;
  color: ${Colors.white};
`;

const TextDescription = styled.Text`
  font-size: 16px;
  color: ${Colors.white};
  background-color: ${Colors.grey};
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
`;
