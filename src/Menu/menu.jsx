import React, {Component} from 'react';
import {FlatList, Alert} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {useTheme, ListItem, Icon} from '@rneui/themed';

const menu = ({navigation}) => {
  const {singOut} = useContext(AuthContext);
  const {theme} = useTheme();

  function precessar(opcao) {
    switch (opcao) {
      case 'Perfil':
        navigation.navigate('PerfilUsuario');
        break;
      case 'Sair':
        Sair();
        break;
    }
  }

  function Sair() {
    if (singOut) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Login'}],
        }),
      );
    } else {
      Alert.alert('Erro', 'Não foi possível sair');
    }
  }

  return (
    <FlatList
      data={[
        {key: 1, opcao: 'Perfil', iconName: 'user'},
        {key: 2, opcao: 'Sair', iconName: 'logout'},
      ]}
      renderItem={({item}) => (
        <ListItem bottomDivider onPress={() => precessar(item.opcao)}>
          <Icon
            type="ionicon"
            name={item.iconName}
            color={theme.colors.primary}
            size={20}
          />
          <ListItem.Content>
            <ListItem.Title>{item.opcao}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      )}
      keyExtractor={item => item.key}
      style={{margin: 10, marginTop: 20}}
    />
  );
};
export default menu;
