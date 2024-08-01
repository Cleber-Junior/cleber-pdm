import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import MyButton from '../../components/MyButton';
import {Colors} from '../../assets/images/colors';
import auth from '@react-native-firebase/auth';
import {color} from '@rneui/base';

const ForgotPass = ({navigation}) => {
  const [email, setEmail] = React.useState('');

  const recuperar = () => {
    if (email === '') {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    } else {
      console.log('Recuperar senha');
      auth()
        .sendPasswordResetEmail(email)
        .then(r => {
          Alert.alert('Email enviado', 'Verifique sua caixa de entrada', [
            {text: 'OK', onPress: () => navigation.goBack()},
          ]);
        })
        .catch(e => {
          Alert.alert('Erro', 'Email não encontrado');
          switch (e.code) {
            case 'auth/invalid-email':
            case 'auth/invalid-credential':
              Alert.alert('Erro', 'E-mail inválido');
              break;
          }
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flex: 1, marginBottom: 200}}>
          <Text> </Text>
        </View>
        <View style={styles.divSuperior}>
          <Text style={styles.Titulo}>Esqueci minha senha</Text>
          <Text style={styles.textoRecuperar}>
            {' '}
            Escreva seu email abaixo, para poder alterar sua senha.{' '}
          </Text>
          <TextInput
            value={email}
            style={styles.input}
            placeholder="Email de recuperação"
            placeholderTextColor={Colors.darkGreen}
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={t => setEmail(t)}
            onSubmitEditing={() => this.passTextInput.focus()}
            blurOnSubmit={false}
          />
          <MyButton texto="Recuperar senha" onClick={recuperar} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPass;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey,
  },

  divSuperior: {
    flex: 3,
    alignItems: 'center',
    color: '#000',
    backgroundColor: '#aaa',
    padding: 20,
    borderRadius: 10,
  },

  Titulo: {
    fontSize: 25,
    color: '#fff',
  },

  textoRecuperar: {
    fontSize: 15,
    marginTop: 15,
    marginBottom: 10,
  },

  input: {
    width: '100%',
    color: Colors.Black,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
};
