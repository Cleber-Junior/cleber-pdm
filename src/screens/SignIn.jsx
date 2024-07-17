import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import MyButton from '../components/MyButton';
import {Colors} from '../assets/images/colors';
import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const SignIn = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  const recuperaSenha = () => {
    navigation.navigate('ForgotPassword');
  };

  const cadastrarSe = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Cadastrar-se'}],
      }),
    );
  };

  const login = (email, pass) => {
    if (email !== '' && pass !== '') {
      auth()
        .signInWithEmailAndPassword(email, pass)
        .then(() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Home'}],
            }),
          );
        })
        .catch(e => {
          console.log('SignIn ' + e);
          switch (e.code) {
            case 'auth/invalid-email':
            case 'auth/invalid-credential':
            case 'auth/invalid-password':
              Alert.alert('Erro', 'E-mail ou senha inválidos');
              break;
          }
        });
    } else {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.divSuperior}>
          <Image
            style={styles.LogoFullName}
            source={require('../assets/images/LogoLigth.png')}
            accessibilityLabel="Logo do App"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={t => setEmail(t)}
            // onEndEditing={() => this.passTextInput.focus()}
            onSubmitEditing={() => this.passTextInput.focus()}
            blurOnSubmit={false}
          />
          <TextInput
            ref={ref => {
              this.passTextInput = ref;
            }}
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
            keyboardType="default"
            returnKeyType="go"
            onChangeText={t => setPass(t)}
          />
          <Text style={styles.forgetPasswordStyle} onPress={recuperaSenha}>
            Esqueceu sua senha?
          </Text>
          <MyButton style={styles.login} texto={'LOGIN'} onClick={login} />
        </View>
        <View style={styles.divInferior}>
          <View style={styles.divOrHr}>
            <View style={styles.divHr}></View>
            <Text style={styles.textOr}>OU</Text>
            <View style={styles.divHr}></View>
          </View>
          <View style={styles.divCadastrarSe}>
            <Text style={styles.textNormal}>Não tem uma conta?</Text>
            <Text style={styles.cadastrarSe} onPress={cadastrarSe}>
              {' '}
              Cadastre-se
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.grey,
    padding: 20,
  },

  divSuperior: {
    flex: 3,
    alignItems: 'center',
    color: '#000',
  },

  divInferior: {
    flex: 1,
    alignItems: 'center',
    fontSize: 20,
    paddingTop: 170,
  },

  LogoFullName: {
    width: 350,
    height: 125,
  },

  input: {
    width: 200,
    height: 50,
    color: Colors.white,
    borderBottomColor: Colors.Black,
    borderBottomWidth: 1,
    fontSize: 20,
    paddingLeft: 2,
    paddingBottom: 1,
  },

  divOrHr: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.Black,
    paddingBottom: 25,
  },

  divHr: {
    width: '30%',
    height: 1,
    borderBottomColor: Colors.Black,
    borderBottomWidth: 1,
  },

  textOr: {
    color: Colors.Black,
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  forgetPasswordStyle: {
    fontSize: 15,
    color: Colors.Black,
    marginTop: 25,
    textDecorationLine: 'underline',
  },

  divCadastrarSe: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textNormal: {
    color: Colors.Black,
    fontSize: 20,
  },

  cadastrarSe: {
    color: Colors.primary,
    fontSize: 20,
  },
});
