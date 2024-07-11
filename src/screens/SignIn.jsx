import React from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';
import MyButton from '../components/MyButton';
import {Colors} from '../assets/images/colors';

const SignIn = props => {
  const recuperaSenha = () => {
    alert('Recuperação de senha', 'Em breve você receberá um e-mail');
  };

  const login = () => {
    alert('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.divSuperior}>
        <Image
          style={styles.LogoFullName}
          source={require('../assets/images/LogoLigth.png')}
          accessibilityLabel="Logo do App"
        />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Text style={styles.forgetPasswordStyle} onPress={recuperaSenha}>
          Esqueceu sua senha?
        </Text>
        <MyButton texto={'LOGIN'} onClick={login} />
      </View>
      <View style={styles.divInferior}>
        <Text style={{color: '#000', fontSize: 20}}>Não tem uma conta?</Text>
        <Text style={{color: Colors.primary, fontSize: 20}}>Cadastre-se</Text>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  divSuperior: {
    flex: 5,
    alignItems: 'center',
    color: '#000',
  },
  divInferior: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    fontSize: 20,
  },

  LogoFullName: {
    width: 350,
    height: 125,
  },

  input: {
    width: 200,
    height: 50,
    borderBottomColor: Colors.Black,
    borderBottomWidth: 1,
    fontSize: 20,
    paddingLeft: 2,
    paddingBottom: 1,
  },

  forgetPasswordStyle: {
    fontSize: 15,
    color: Colors.Black,
    marginTop: 25,
    textDecorationLine: 'underline',
  },
});
