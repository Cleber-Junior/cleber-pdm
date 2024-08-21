import styled from 'styled-components/native';
import {Colors} from '../../assets/images/colors';

export const Container = styled.SafeAreaView`
  flex: 4;
  background-color: ${Colors.grey};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-above;
  align-items: center;
  background-color: ${Colors.primary};
  padding: 10px;
`;

export const Projetos = styled.FlatList`
  width: 95%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  color: ${Colors.white};
`;

export const Text = styled.Text`
  font-size: 12px;
  margin-left: 10px;
  color: ${Colors.white};
`;

export const Form = styled.View`
  margin: 10px;
`;

export const TextDescription = styled.TextInput`
  font-size: 16px;
  color: ${Colors.white};
  background-color: ${Colors.grey};
  border-radius: 10px;
  padding: 10px;
`;
