import React from 'react';
import {View, Text} from 'react-native';

const SignIn = props => {
  return (
    <View>
      <Text onPress={() => props.navigation.navigate('Home')}>LOGAR</Text>
      <Text onPress={() => props.navigation.navigate('SignUp')}>
        Vai para SignUp
      </Text>
    </View>
  );
};

export default SignIn;
