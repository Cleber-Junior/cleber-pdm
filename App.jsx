import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp/SignUp';
import Preload from './src/screens/Preload';
import {StatusBar} from 'react-native';
import {Colors} from './src/assets/images/colors';
import ForgotPass from './src/screens/ForgotPass';
import {Header} from '@rneui/base';

const Stack = createNativeStackNavigator();

const App = () => {
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
export default App;

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
