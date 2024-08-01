import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/index';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/Index';
import Preload from '../screens/Preload/Index';
import {StatusBar} from 'react-native';
import {Colors} from '../assets/images/colors';
import ForgotPass from '../screens/ForgotPass/ForgotPass';
import {Header} from '@rneui/base';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.darkGreen} />
      <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Preload"
          component={Preload}
          options={PreloadStyle}
        />
        <Stack.Screen name="SignIn" component={SignIn} options={SignInStyle} />
        <Stack.Screen name="Home" component={Home} options={HomeStyle} />
        <Stack.Screen name="SignUp" component={SignUp} options={SingnUpStyle} />
        <Stack.Screen
          name="ForgotPass"
          component={ForgotPass}
          options={forgotPass}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;

const HomeStyle = {
  headerStyle: {backgroundColor: Colors.primary},
  headerTitleStyle: {color: Colors.white},
  headerStyle: {backgroundColor: Colors.primary},
};

const PreloadStyle = {
  headerShown: false,
};

const SignInStyle = {
  tittle: 'Login',
  headerLeaft: false,
  headerStyle: {backgroundColor: Colors.primary},
  headerTitleStyle: {color: Colors.white},
};

const forgotPass = {
  tittle: 'Esqueci minha senha',
  headerLeaft: false,
  headerStyle: {backgroundColor: Colors.primary},
  headerTitleStyle: {color: Colors.white},
};

const SingnUpStyle = {
  tittle: 'Cadastrar-se',
  headerLeaft: false,
  headerStyle: {backgroundColor: Colors.primary},
  headerTitleStyle: {color: Colors.white},
};
