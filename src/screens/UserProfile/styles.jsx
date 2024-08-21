import styled from 'styled-components/native';
import {Colors} from '../../assets/images/colors';

export const Container = styled.SafeAreaView`
  flex: 4;
  background-color: ${Colors.grey};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.primary};
  padding: 10px;
`;