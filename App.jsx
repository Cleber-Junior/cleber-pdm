import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import {StatusBar} from 'react-native';
import {Colors} from './src/assets/images/colors';
import ForgotPass from './src/screens/ForgotPass';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.darkGreen} />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={SignIn} options={SignInStyle} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Cadastrar-se"
          component={SignUp}
          options={SingnUpStyle}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPass}
          options={forgotPass}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const SignInStyle = {
  headerLeaft: false,
  headerStyle: {backgroundColor: Colors.primary},
  headerTitleStyle: {color: Colors.white},
};

const forgotPass = {
  headerLeaft: false,
  headerStyle: {backgroundColor: Colors.primary},
  headerTitleStyle: {color: Colors.white},
};

const SingnUpStyle = {
  headerLeaft: false,
  headerStyle: {backgroundColor: Colors.primary},
  headerTitleStyle: {color: Colors.white},
};
