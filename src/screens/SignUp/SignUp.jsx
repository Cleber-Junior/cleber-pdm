import React from 'react';
import {View, Text, ScrollView, Image, TextInput, Alert} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../assets/images/colors';
import MyButton from '../../components/MyButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUp = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [confPass, setConfPass] = React.useState('');
  const [pass, setPass] = React.useState('');

  const Cadastra = () => {
    if (name !== '' || email !== '' || confPass !== '' || pass !== '') {
      if (pass !== confPass) {
        Alert.alert('Erro', 'Senhas não conferem');
        return;
      }
      auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(r => {
          let userf = auth().currentUser;
          let User = {};
          User.name = name;
          User.email = email;
          firestore()
            .collection('users')
            .doc(userf.uid)
            .set(User)
            .then(() => {
              console.log('Usuário adicionado!');
              userf.sendEmailVerification().then(() => {
                Alert.alert(
                  'Email enviado',
                  'Email foi enviado para: ' + email + ' para verificação',
                );
                navigation.reset({
                  index: 0,
                  routes: [{name: 'SignIn'}],
                });
              });
            })
            .catch(e => {
              console.log('Erro: ', e);
            });
          Alert.alert('Sucesso', 'Cadastro efetuado com sucesso');
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'SignIn'}],
            }),
          );
        })
        .catch(e => {
          console.log('Erro: ', e);
          Alert.alert('Erro', 'Email não encontrado');
          switch (e.code) {
            case 'auth/email-already-in-use':
              Alert.alert('Erro', 'Email já cadastrado');
              break;
            case 'auth/invalid-email':
              Alert.alert('Erro', 'E-mail inválido');
              break;
            case 'auth/invalid-credential':
              Alert.alert('Erro', 'Credencial inválida');
              break;
          }
        });
    } else {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
  };

  const SignIn = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      }),
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.Titulo}>
        <Text style={Styles.TextoTitulo}> Cadastre-se </Text>
      </View>
      <ScrollView>
        <View style={Styles.divSuperior}>
          <View style={Styles.userForm}>
            <Image
              source={require('../../assets/icons/user.png')}
              style={{marginRight: 5, marginBottom: 5}}
            />
            <TextInput
              style={Styles.input}
              placeholder="Nome"
              placeholderTextColor={Colors.darkGreen}
              keyboardType="default"
              returnKeyType="next"
              onChangeText={t => setName(t)}
              onSubmitEditing={() => this.emailInput.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={Styles.emailForm}>
            <Image
              source={require('../../assets/icons/email.png')}
              style={{marginRight: 5, marginBottom: 5}}
            />
            <TextInput
              ref={input => (this.emailInput = input)}
              style={Styles.input}
              placeholder="Email"
              placeholderTextColor={Colors.darkGreen}
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={t => setEmail(t)}
              onSubmitEditing={() => this.phoneInput.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={Styles.phoneForm}>
            <Image
              source={require('../../assets/icons/pass.png')}
              style={{marginRight: 5, marginBottom: 5}}
            />
            <TextInput
              ref={input => (this.passwordInput = input)}
              style={Styles.input}
              secureTextEntry={true}
              placeholder="Senha"
              placeholderTextColor={Colors.darkGreen}
              keyboardType="default"
              returnKeyType="go"
              onChangeText={t => setPass(t)}
            />
          </View>
          <View style={Styles.passForm}>
            <Image
              source={require('../../assets/icons/pass.png')}
              style={{marginRight: 5, marginBottom: 5}}
            />
            <TextInput
              ref={input => (this.passwordInput = input)}
              style={Styles.input}
              secureTextEntry={true}
              placeholder="Confirmar Senha"
              placeholderTextColor={Colors.darkGreen}
              keyboardType="default"
              returnKeyType="go"
              onChangeText={t => setConfPass(t)}
            />
          </View>

          <MyButton texto={'CADASTRAR-SE'} onClick={Cadastra} />
        </View>

        <View style={Styles.divLogin}>
          <Text style={Styles.textNormal}>Já tem uma conta?</Text>
          <Text style={Styles.login} onPress={SignIn}>
            {' '}
            Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const Styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.grey,
    padding: 20,
  },

  Titulo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextoTitulo: {
    fontSize: 50,
    color: Colors.primary,
  },

  divSuperior: {
    flex: 3,
    alignItems: 'center',
    color: '#000',
    backgroundColor: '#aaa',
    padding: 20,
    borderRadius: 10,
  },

  userForm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  emailForm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  phoneForm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  passForm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  input: {
    width: 300,
    height: 50,
    padding: 10,
    marginBottom: 10,
    color: Colors.Black,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },

  divLogin: {
    flex: 1,
    fontSize: 20,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textNormal: {
    color: Colors.Black,
    fontSize: 20,
  },

  login: {
    color: Colors.primary,
    fontSize: 20,
  },
};
