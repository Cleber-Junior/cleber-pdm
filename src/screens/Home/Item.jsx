import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../../assets/images/colors';

export default ({item, onPress}) => {
  return (
    <Button onPress={onPress} underlayColor="transparent">
      <>
        {/* <Image
          source={
            item.urlFoto
              ? {uri: item.urlFoto}
              : {
                  uri: 'https://firebasestorage.googleapis.com/v0/b/cleber-pdm-e4781.appspot.com/o/place.jpg?alt=media&token=7e51f943-a1d0-44c0-b602-10c18c0909d2',
                }
          }
        /> */}
        <TextName>{item.title}</TextName>
        <TextValue>Valor Atual: {item.valorAtual}</TextValue>
        <TextMeta>Valor Meta: {item.valorMeta}</TextMeta>
        <TextDescription>{item.desc}</TextDescription>
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

const Image = styled.Image`
  width: 100%;
  height: 200px;
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
