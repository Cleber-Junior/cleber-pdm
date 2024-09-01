import {useContext, useEffect, useState} from 'react';
import {ProjetoContext} from '../../Context/ProjetoProviders';
import {Container, Header, Title, TextDescription, Text} from './styles';
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  ToastAndroid,
  Image,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../assets/images/colors';
import Loading from '../../components/Loading';
import MyButton from '../../components/MyButton';
import DeleteButton from '../../components/DeleteButton';
import {launchImageLibrary} from 'react-native-image-picker';
import {ButtonGroup} from '@rneui/themed';

export default ({route, navigation}) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [valorMeta, setValorMeta] = useState('');
  const [valorAtual, setValorAtual] = useState(0);
  const [desc, setDesc] = useState('');
  const {projects} = useContext(ProjetoContext);
  const [urlFoto, setUrlFoto] = useState('');
  const [urlDevice, setUrlDevice] = useState('');
  const [loading, setLoading] = useState(false);
  const {saveProject, updateProject, deleteProject} =
    useContext(ProjetoContext);

  useEffect(() => {
    if (route.params.projeto) {
      setId(route.params.projeto.id);
      setTitle(route.params.projeto.title);
      setValorMeta(route.params.projeto.valorMeta);
      setValorAtual(route.params.projeto.valorAtual);
      setDesc(route.params.projeto.desc);
      // setUrlFoto(route.params.value.urlFoto);
    }
    //console.log(id);
  }, [route]);

  const salvar = async () => {
    if (title && valorMeta && desc) {
      let projeto = {};
      projeto.id = id;
      projeto.title = title;
      projeto.valorMeta = valorMeta;
      projeto.desc = desc;

      let newProjeto = {};
      newProjeto.id = id;
      newProjeto.title = title;
      newProjeto.valorMeta = valorMeta;
      newProjeto.desc = desc;
      newProjeto.valorAtual = valorAtual;

      if (id) {
        if (await updateProject(newProjeto)) {
          ToastAndroid.show(
            'Projeto atualizado com sucesso',
            ToastAndroid.LONG,
          );
        } else {
          ToastAndroid.show('Erro ao atualizar projeto', ToastAndroid.LONG);
        }
      } else {
        if (await saveProject(newProjeto)) {
          ToastAndroid.show('Projeto criado com sucesso', ToastAndroid.LONG);
        } else {
          ToastAndroid.show('Erro ao criar projeto', ToastAndroid.LONG);
        }
      }
      setLoading(false);
      navigation.goBack();
    }
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
            if (await deleteProject(id)) {
              ToastAndroid.show(
                'Projeto deletado com sucesso',
                ToastAndroid.LONG,
              );
            } else {
              ToastAndroid.show('Erro ao deletar projeto', ToastAndroid.LONG);
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
      </Header>
      <View>
        <Text style={styles.tituloProj}>{title}</Text>
        {/* <Image
            style={styles.Capa}
            source={
              urlDevice !== ''
                ? {uri: urlDevice}
                : urlFoto !== ''
                ? {uri: urlFoto}
                : {
                    uri: 'https://firebasestorage.googleapis.com/v0/b/cleber-pdm-e4781.appspot.com/o/place.jpg?alt=media&token=7e51f943-a1d0-44c0-b602-10c18c0909d2',
                  }
            }
            PlaceholderContent={<Loading />}
          /> */}
        {/* <ButtonGroup
            buttons={['Buscar Imagem']}
            onPress={v => buscaImgDevice(v)}
          /> */}
        {!id && (
          <TextInput
            placeholder="Titulo"
            value={title}
            onChangeText={t => setTitle(t)}
          />
        )}
        <TextInput
          placeholder="Valor Meta:"
          value={valorMeta}
          keyboardType="number-pad"
          onChangeText={t => setValorMeta(t)}
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
      <Loading loading={loading} />
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

  Capa: {
    width: '{100%}',
    height: 200,
    borderRadius: 10,
    margin: 10,
  },

  Busca: {
    margin: 10,
    backgroundColor: Colors.primary,
  },

  tituloProj: {
    fontSize: 24,
    color: Colors.white,
    margin: 10,
    textAlign: 'center',
  },
});

// Crud com SDK
// const salvar = async () => {
//   setLoading(true);
//   if (await save({id, title, valorMeta, desc, urlFoto: urlFoto}, urlDevice)) {
//     ToastAndroid.show('Boa, projeto criado com sucesso!!', ToastAndroid.LONG);
//     setUrlDevice('');
//     navigation.goBack();
//   } else {
//     ToastAndroid.show('Ops! Algo deu errado.', ToastAndroid.LONG);
//   }
//   setLoading(false);
// };

// const excluir = async () => {
//   Alert.alert(
//     'Opa!, cuidado.',
//     'Você tem certeza que deseja deletar este projeto?',
//     [
//       {
//         text: 'Não',
//         onPress: () => {},
//       },
//       {
//         text: 'Sim',
//         onPress: async () => {
//           setLoading(true);
//           const pathDelete = `images/${title}/foto.png`;
//           if (await del(id, pathDelete)) {
//             ToastAndroid.show('Projeto Deletado', ToastAndroid.LONG);
//           } else {
//             ToastAndroid.show(
//               'Houve problema ao excluir.',
//               ToastAndroid.SHORT,
//             );
//           }
//           setLoading(false);
//           navigation.goBack();
//         },
//       },
//     ],
//   );
// };

// Fotos com Firebase
// const buscaGaleria = () => {
//   const options = {
//     storageOptions: {
//       title: 'Selecionar uma imagem',
//       skipBackup: true,
//       path: 'images',
//       mediaType: 'photo',
//       width: 150,
//       height: 200,
//     },
//   };

//   launchImageLibrary(options, response => {
//     if (response.errorCode) {
//       ToastAndroid.show('Erro ao buscar imagem', ToastAndroid.SHORT);
//     } else if (response.didCancel) {
//       ToastAndroid.show('Busca cancelada', ToastAndroid.SHORT);
//     } else {
//       const path = response.assets[0].uri;
//       setUrlDevice(path);
//     }
//   });
// };

// function buscaImgDevice(v) {
//   switch (v) {
//     case 0:
//       buscaGaleria();
//       break;
//   }
// }
