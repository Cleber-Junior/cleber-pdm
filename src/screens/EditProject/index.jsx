import {useContext, useEffect, useState} from 'react';
import {ProjetoContext} from '../../Context/ProjetoProviders';
import {Container, Header, Text} from './styles';
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
    if (await save({id, title, metaValue, description})) {
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

  console.log(desc);

  return (
    <Container>
      <Header>
        <Icon name="arrowleft" size={30} color="#fff" onPress={retornaHome} />
        <Text>Projeto</Text>
      </Header>
      <View>
        <TextInput placeholder="Nome" />
        <TextInput placeholder="Nome" />
        <TextInput placeholder="Nome" />
      </View>
      <MyButton texto="Salvar" onClick={() => salvar()} />
      {id && <DeleteButton texto="Deletar" onClick={() => excluir()} />}
    </Container>
  );
};

const styles = StyleSheet.create({});
