import React, {Component} from 'react';
import {Text, View, SafeAreaView, TextInput, ScrollView} from 'react-native';
import MyButton from '../components/MyButton';

const ForgotPass = () => {
  const recuperaSenha = () => {
    console.log('Recuperar senha');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Esqueci minha senha</Text>
          <Text>
            Digite seu e-mail para recuperar a senha. Você receberá um e-mail
            com as instruções.
          </Text>
          <TextInput placeholder="Digite seu e-mail" />
          <MyButton texto="Recuperar senha" onClick={recuperaSenha} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPass;
