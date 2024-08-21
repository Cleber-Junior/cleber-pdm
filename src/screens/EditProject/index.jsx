import {useContext, useEffect, useState} from 'react';
import {ProjetoContext} from '../../Context/ProjetoProviders';
import {Container, Header, Title, TextDescription, Text} from './styles';
import {View, TextInput, StyleSheet, Alert, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../assets/images/colors';
import Loading from '../../components/Loading';
import MyButton from '../../components/MyButton';
import DeleteButton from '../../components/DeleteButton';

export default ({route, navigation}) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [metaValue, setMetaValue] = useState('');
  const [desc, setDesc] = useState('');
  const {projects} = useContext(ProjetoContext);
  const [loading, setLoading] = useState(false);
  const {save, del} = useContext(ProjetoContext);

  useEffect(() => {
    if (route.params.value) {
      setId(route.params.value.id);
      setTitle(route.params.value.title);
      setMetaValue(route.params.value.metavalue);
      setDesc(route.params.value.description);
    }
  }, [route]);

  const salvar = async () => {
    setLoading(true);
    if (await save(id, title, metaValue, desc)) {
      ToastAndroid.show('Boa, projeto criado com sucesso!!', ToastAndroid.LONG);
      navigation.goBack();
    } else {
      ToastAndroid.show('Ops! Algo deu errado.', ToastAndroid.LONG);
    }
    setLoading(false);
  };

  const excluir = async () => {
    Alert.alert(
      'Opa!, cuidado.',
      'Você tem certeza que deseja deletar este projeto?',
      [
        {
          text: 'Não',
          onPress: () => {},
        },
        {
          text: 'Sim',
          onPress: async () => {
            setLoading(true);
            if (await del(id)) {
              ToastAndroid.show('Projeto Deletado', ToastAndroid.LONG);
            } else {
              ToastAndroid.show(
                'Houve problema ao excluir.',
                ToastAndroid.SHORT,
              );
            }
            setLoading(false);
            navigation.goBack();
          },
        },
      ],
    );
  };

  const retornaHome = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Header>
        <Icon name="arrowleft" size={30} color="#fff" onPress={retornaHome} />
        <Title>Projeto</Title>
      </Header>
      <View>
        {/* TODO: Crud projeto */}
        <TextInput
          placeholder="Nome:"
          value={title}
          onChangeText={t => setTitle(t)}
        />
        <TextInput
          placeholder="Valor Meta:"
          value={metaValue}
          onChangeText={t => setMetaValue(t)}
        />
        <Text>Descirção</Text>
        <TextDescription
          style={{width: '80%', height: 120}}
          multiline={true}
          placeholder="Descrição:"
          value={desc}
          onChangeText={t => setDesc(t)}
        />
      </View>
      <View style={styles.Buttons}>
        <MyButton texto="Salvar" onClick={() => salvar()} />
        {id && <DeleteButton texto="Deletar" onClick={() => excluir()} />}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  Buttons: {
    marginLeft: '15%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 10,
  },
});
