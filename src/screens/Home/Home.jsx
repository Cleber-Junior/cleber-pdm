import React, {useEffect} from 'react';
import LogoutButton from '../../components/LogoutButton';
import {Container, Header, Projetos, Text} from './styles';
import Item from './Item';
import firestore from '@react-native-firebase/firestore';

const Home = ({navigation}) => {
  const [data, setData] = React.useState([]);

  const getUsers = () => {
    firestore()
      .collection('projetos')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let data = doc.data();
          console.log(data);
          console.log(doc.id, ' => ', doc.data());
        });
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  const logOutUser = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      }),
    );
  };

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const routeUser = item => {
    console.log(item);
  };

  const renderItem = ({item}) => (
    <Item title={item.title} onPress={() => routeUser(item)} />
  );

  return (
    <Container>
      <Header>
        <Text>Home</Text>
        <LogoutButton logout={logOutUser} />
      </Header>
      <Projetos
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default Home;
