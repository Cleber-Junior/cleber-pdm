import React from 'react';
import {FAB} from '@rneui/themed';
import {Colors} from '../assets/images/colors';

export default ({onClick}) => {
  return (
    <FAB
      visible={true}
      icon={{type: 'ionicon', name: 'add', color: Colors.Black}}
      color={Colors.primary}
      onPress={() => onClick()}
      containerStyle={{position: 'absolute', bottom: 10, right: 10}}
    />
  );
};
